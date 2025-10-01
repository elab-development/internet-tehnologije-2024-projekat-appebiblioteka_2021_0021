import React from 'react';
import Naslov from "../komponente/Naslov";
import jana from "../slike/jana.jpg";
import veljko from "../slike/velja.jpg";
import {Col, Row} from "react-bootstrap";
import Kartica from "../komponente/Kartica";

const Onama = () => {
    
    const onama = [
            {
                slika: jana,
                ime: "Jana Stevanović",
                opis: "Student 4. godine smera ISIT, omiljena knjiga joj je  \"1984\" od Džordža Orvela.",
                instaLink: "https://www.instagram.com/jstevanoviccc/",
                lnLink: "https://www.linkedin.com/in/jana-stevanovicc/"
            },
            {
                slika: veljko,
                ime: "Veljko Panić",
                opis: "Student 4. godine smera ISIT, uživalac domaće beletristike.",
                instaLink: "https://www.instagram.com/veljkopanic/",
                lnLink: "https://www.linkedin.com/in/veljko-pani%C4%87-a23706343/?originalSubdomain=rs"
            }
        ];

    return (
        <>
            <Naslov naslov="Informacije" podnaslov="o nama" />
            <Row>
                {
                    onama.map((osoba, index) => (
                        <Col md={6} key={index}>
                            <Kartica slika={osoba.slika} opis={osoba.opis} ime={osoba.ime} instaLink={osoba.instaLink} lnLink={osoba.lnLink} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default Onama;
