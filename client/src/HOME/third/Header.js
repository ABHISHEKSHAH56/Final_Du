import React from 'react'
import { Container, Row } from 'react-bootstrap';
import moduleName from '../img/olo.jpg'
import '../extra/Landkro.css'

export default function Header() {
        
        
        return (
                <div>

                        <Container >
                                <Row>
                                <div className="col-lg-4 m-2 kam">
                                        <img src={moduleName}/>                                                                
                                </div>
                                <div className="col-lg-7 ram">
                                        <h1>Lady Shree Ram College </h1>                                                     
                                                        
                                </div>
                                </Row>                       
                         </Container>

                        
                </div>
        )
}
