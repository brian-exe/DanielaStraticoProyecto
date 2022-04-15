import { Button, Card } from "react-bootstrap";
import React from 'react';

function ServiceCard({title, text, imgSrc}) {

    return ( 
        // por alguna razon no toma los estilos a partir de la clase, por eso los puse a mano aca
        <Card classname="service-card" style={{ width: '18rem', borderRadius: '1.25rem' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title classname="text-primary-color" style={{ color: '#A12568'}} >{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button size='sm' className="rounded-circle" style={{ borderColor: '#A12568' ,backgroundColor: '#A12568'}}  variant="primary">+</Button>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;