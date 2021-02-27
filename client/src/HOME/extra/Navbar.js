import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css';


const  Navbar= ()=>{
        const [click, setClick]=useState(false);
        const handleClicker=()=>setClick(!click);
        const closeMobileMenu=()=>setClick(false);
        

                return (
                        <>
                        
                        <nav className="navbar" >
                                <div className="navbar-container">
                                       
                                        <Link to='/' className="navbar-logo">
                                               
                                               Shah Corner 

                                              
                                                    
                                        
                                        </Link>
                                        <div className="menu-icon" onClick={handleClicker}>
                                                <i className={click ? 'fas fa-times ' : 'fas fa-bars'} aria-hidden="true"/>

                                        </div>
                                        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Home
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Service
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Products
                                                        </Link>
                                                       
                                                </li>
                                               
                                               
                                        </ul>
                                </div>
                        </nav>
                        </>
                )
        }


export default Navbar;