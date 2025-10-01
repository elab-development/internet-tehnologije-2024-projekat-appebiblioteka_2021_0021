import React, {useEffect} from 'react';
import Naslov from "../komponente/Naslov";
import {Card, Col, Image, Row} from "react-bootstrap";
import book from '../slike/book.jpg';
import server from "../logika/server"; 

const OPEN_LIBRARY_COVER_URL = 'https://covers.openlibrary.org/b/id/';

const Pocetna = () => {

    const [knjige, setKnjige] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const apiUrls = [
        'https://openlibrary.org/works/OL5735363W.json',
        'https://openlibrary.org/works/OL10263W.json',
        'https://openlibrary.org/works/OL257943W.json',
        'https://openlibrary.org/works/OL15518787W.json',
        'https://openlibrary.org/works/OL1168083W.json',
        'https://openlibrary.org/books/OL22332390M.json'
    ];

    useEffect(() => {
        const fetchOpenLibraryBooks = async () => {
            setIsLoading(true);
            setError(null);
            
            const apiPromises = apiUrls.map(url => 
                server.get(url)
            );

            try {
                const responses = await Promise.all(apiPromises);
                
                const parsedBooks = responses.map(response => {
                    const data = response.data;
                    
                    const description = (typeof data.description === 'object' && data.description.value) 
                                             ? data.description.value 
                                             : data.description || 'Opis nije dostupan.';

                    const coverId = data.cover_id || (Array.isArray(data.covers) ? data.covers[0] : null);
                    
                    const coverUrl = coverId ? `${OPEN_LIBRARY_COVER_URL}${coverId}-L.jpg` : book; 
                    
                    return {
                        id: data.key, 
                        title: data.title || 'Naslov nije dostupan',
                        description: description.length > 300 ? description.substring(0, 300) + '...' : description, 
                        cover: coverUrl
                    };
                });

                setKnjige(parsedBooks);
            } catch (err) {
                console.error("Greška pri učitavanju OpenLibrary knjiga:", err);
                setError("Došlo je do greške prilikom učitavanja knjiga. (OpenLibrary)");
                alert("Došlo je do greške prilikom učitavanja knjiga.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchOpenLibraryBooks();
    }, []);

    const renderKnjige = () => {
        if (isLoading) {
            return <p>Učitavanje popularnih knjiga sa OpenLibrary...</p>;
        }

        if (error) {
            return <p style={{ color: 'red' }}>Greška: {error}</p>;
        }
        
        return knjige.map(knjiga => (
            <Col md={4} key={knjiga.id} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={knjiga.cover} style={{ height: '400px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{knjiga.title}</Card.Title>
                        <Card.Text>
                            {knjiga.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    return (
        <>
            <Naslov naslov="Dobrodošli u biblioteku" podnaslov="Uživajte u čitanju knjiga" />
            
            <Row>
                <Col md={6}>
                    <Image src={book} fluid />
                </Col>
                <Col md={6}>
                    <h2>Dobrodošli u digitalnu biblioteku</h2>
                    <p>
                        Naša Digitalna Biblioteka pruža vam brz i jednostavan način da istražujete i čitate knjige bilo kada i bilo gde. 
                        Sistem je kreiran tako da <strong>čitanje i iznajmljivanje knjiga online</strong> bude praktično i dostupno svima.
                    </p>

                    <h2>Kako radi?</h2>
                    <ul>
                        <li>Pregledajte širok izbor žanrova i autora u našem katalogu.</li>
                        <li>Odaberite knjigu koja vas zanima.</li>
                        <li>Čitajte odmah putem računara, tableta ili mobilnog uređaja.</li>
                    </ul>

                    <h2>Pretplata</h2>
                    <p>
                        Za samo <strong>999 RSD mesečno</strong> uživajte u pogodnostima koje nudimo:
                    </p>
                    <ul>
                        <li>Neograničeno čitanje svih dostupnih naslova.</li>
                        <li>Mogućnost preuzimanja knjiga za offline čitanje.</li>
                        <li>Specijalni pristup novim i ekskluzivnim izdanjima.</li>
                    </ul>
                </Col>
            </Row>

            <hr/>
            <Naslov naslov="Popularne knjige" podnaslov="Istražite naše odabrane naslove" />
            <Row>
                {renderKnjige()}
            </Row>
        </>
    );
};

export default Pocetna;