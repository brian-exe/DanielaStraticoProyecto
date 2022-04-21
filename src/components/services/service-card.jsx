import { Card } from "react-bootstrap";
import React from 'react';

function ServiceCard({title, text, imgSrc, onClick}) {
    return ( 
        // por alguna razon no toma los estilos a partir de la clase, por eso los puse a mano aca
        <Card className="service-card" onClick={onClick}>
            <Card.Img variant="top" src={imgSrc}/>
            <div style={{textAlign:'center'}}>
                <Card.Title className="text-primary-color" style={{ color: '#A12568'}} >{title}</Card.Title>
            </div>
        </Card>
    );
}

export default ServiceCard;