import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Feed, Icon } from 'semantic-ui-react'
import a from '../img/exam.svg';
import b from '../img/col.svg' ;
import ck from '../img/3.png';
import d from '../img/cutoff.svg' ;
import { Link } from 'react-router-dom';

export default function Section1() {
        return (
                <div className="container">
                        <div className="header">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius obcaecati, quibusdam eaque deserunt animi quos quo! Eaque, qui modi!</p>
                        </div>
                        <Container >
                                <Row className="service">
                                        
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                        <div className="first"> 
                                                <Link to="/second">
                                                <Card  style={{ width: '20rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img src={b}  width='100px' height='80px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 align-self-center">College</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                                
                                                
                                        </div>
                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                                
                                        <div className="first">
                                                 <Link to="/comingsoon">
                                                <Card  style={{ width: '20rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img src={d}  width='100px' height='80px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 align-self-center">Cut-Off </Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                        

                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                        <div className="first"> <Link to="/comingsoon">
                                                <Card  style={{ width: '20rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img src={ck}  width='100px' height='80px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 align-self-center">College Predictor</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                                
                                        </Col>
                                         <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                         <div className="first"> <Link to="/comingsoon">
                                                <Card  style={{ width: '20rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img src={d}  width='100px' height='80px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 align-self-center"> Entrance-Exam</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                                
                                        </Col>       
                                </Row>
                               
                        </Container>

                </div>

        )
}

