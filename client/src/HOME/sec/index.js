import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../extra/Navbar'
import Footer  from '../extra/Footer'
import Landingpage from './Landingpage'

import {useDispatch} from 'react-redux';
import { getcollege } from '../Redux/action/post'

export default function Second() {
        const dispatch=useDispatch();
        useEffect(() => {
                dispatch(getcollege());
                
               
        }, [dispatch])
        return (
                <div>
                        <Navbar />
                        <Landingpage />
                        <Footer />
                        
                </div>
        )
}
