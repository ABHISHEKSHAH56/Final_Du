import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router,Switch, Route,
        useRouteMatch,
        useParams
} from "react-router-dom";
import Footer from '../extra/Footer';
import Navbar from '../extra/Navbar';
import { getcourse, getfees, getone } from '../Redux/action/post';
import Landkro from './Header';
import MenuHai from './Menu';
import Menu from './Menu';
import CourseOffer from './View/Course';
import CutOff from './View/cutoff';
import Fees from './View/Fess';
import OverView from './View/Overview';
import Details from './View/Overview';





export default function Index() {        
        let { slug } = useParams();
        const dispatch = useDispatch();
        useEffect(() => {
                
                dispatch(getone(slug))
               
         }, [dispatch])
        
        useEffect(() => {
                
                dispatch(getfees(slug))
               
         }, [dispatch])
         useEffect(() => {
                
                dispatch(getcourse(slug))
               
         }, [dispatch])
         
        const routes = [
                {
                        path: `/overview/${slug}`,
                        exact: true,

                        main: () => <OverView/>
                },
                {
                        path: `/fees/${slug}`,

                        main: () => <Fees />
                },
                {
                        path: `/course/${slug}`,

                        main: () => <CourseOffer />
                },
                {
                        path: `/cutoff/:slug`,

                        main: () => <CutOff />
                }
                
        ];
        return (
                <Router>
                        <div>
                                <Navbar />
                                <Landkro />
                                <Container style={{ 'marginTop': '80px' }} >
                                        <Row className='cut-menu'>
                                                <Col className="col-xl-3  col-lg-3 col-md-3 " >
                                                        <MenuHai name={slug} />
                                                </Col>
                                                <Col className="col-xl-9 col-lg-9 mt-10 col-md-9 " style={{ 'marginTop': '10px', 'minHeight': '80vh' }}  >
                                                        <Switch>
                                                                {routes.map((route, index) => (
                                                                        // Render more <Route>s with the same paths as
                                                                        // above, but different components this time.
                                                                        <Route
                                                                                key={index}
                                                                                path={route.path}
                                                                                exact={route.exact}
                                                                                children={<route.main />}
                                                                        />
                                                                ))}
                                                        </Switch>

                                                </Col>
                                        </Row>
                                </Container>
                                <Footer />

                        </div>

                </Router>
        )
}

