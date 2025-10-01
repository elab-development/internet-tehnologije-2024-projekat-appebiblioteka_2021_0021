import React, {useEffect} from 'react';
import Naslov from "../komponente/Naslov";
import {Card, Col, Image, Row} from "react-bootstrap";
import book from '../slike/book.jpg';
import server from "../logika/server";
import {FaInstagram, FaLinkedin} from "react-icons/fa";

const Pocetna = () => {


    return (
        <>
            <Naslov naslov="Dobrodošli u biblioteku" podnaslov="Čitajte sa uživanjem." />
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
            <Naslov naslov="Popularne knjige" podnaslov="Istražite naše najpopularnije naslove" />
        </>
    );
};

export default Pocetna;
