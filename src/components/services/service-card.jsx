import { Card } from "react-bootstrap";
import React from 'react';

function ServiceCard({title, text, imgSrc, onClick}) {
    return ( 
        <Card className="service-card" onClick={onClick}>
            <Card.Img variant="top" src={imgSrc}/>
            <div style={{textAlign:'center'}}>
                <Card.Title className="text-primary-color">{title}</Card.Title>
            </div>
        </Card>
    );
}

export default ServiceCard;