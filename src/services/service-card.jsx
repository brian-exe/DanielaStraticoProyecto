import { Button, Card } from "react-bootstrap";
import React from 'react';

function ServiceCard({title, text, imgSrc}) {

    return ( 
        // por alguna razon no toma los estilos a partir de la clase, por eso los puse a mano aca
        <Card className="service-card shadow p-3">
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title className="text-primary-color">{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button size='sm' className="service-card-button rounded-circle" variant="primary">+</Button>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;