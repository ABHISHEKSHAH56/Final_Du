import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router,Switch, Route,
        useRouteMatch,
        useParams
} from "react-router-dom";

import { getcutoff } from '../../../Redux/action/post';

import CutMenuHai from './menu';

import Round from './Round';





export default function CutOff() {  
        let { path, url } = useRouteMatch();      
        let { slug } = useParams();
        console.log(slug,path,url)
        
        const raw={
                year:2020,
                id:slug,
                cate:'SC'
        }
        console.log(raw)
        const dispatch = useDispatch();
        useEffect(() => {
                
                dispatch(getcutoff(raw))
               
         }, [dispatch])
        const routes = [
                {
                        path: `/overview/${slug}`,
                        exact: true,

                        main: () => <Round/>
                }
                
        ];
        return (
                <Router>
                        <div>
                               
                                <Container style={{ 'marginTop': '80px' }} >
                                        <Row className='cut-menu'>
                                                <Col className="col-xl-3  col-lg-3 col-md-3 " >
                                                        <CutMenuHai name={slug} />
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
                               

                        </div>

                </Router>
        )
}

