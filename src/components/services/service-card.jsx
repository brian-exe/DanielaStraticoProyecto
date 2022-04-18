import { Button, Card } from "react-bootstrap";
import React from 'react';

function ServiceCard({title, text, imgSrc}) {
    return ( 
        // por alguna razon no toma los estilos a partir de la clase, por eso los puse a mano aca
        <Card className="service-card" style={{ width:'350px', height:'fit-content', borderRadius:'52px', boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.64)', padding:'30px'}}>
            <Card.Img variant="top" src={imgSrc} style={{width:'200px', marginRight:'auto', marginLeft:'auto', padding:'40px 20px' }}/>
            <div style={{textAlign:'center'}}>
                <Card.Title className="text-primary-color" style={{ color: '#A12568'}} >{title}</Card.Title>
                <Button size='sm' className="rounded-circle" style={{ borderColor: '#A12568' ,backgroundColor: '#A12568', marginTop:'60px'}}  variant="primary">+</Button>
            </div>
        </Card>
    );
}

export default ServiceCard;