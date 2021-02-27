import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export default function CourseOffer() {
        const posts = useSelector((state) => state.shop.course);
        return (
               
                <Container >
                                <div className="head">
                                        <h2>Course Offered</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                        <thead style={{color:"white",background:"black",height:'140px'}}>
                                                        <th  >Course</th>
                                                        
                                                </thead>
                                                <tbody >
                                                 {
                                                 posts.map((e) => (
                                                        
                                                                <tr key={e._id}>
                                                                        <td className="fw-blod   table-success ">{e.course}</td>
                                                                       
                                                                </tr>
                                                               
                                                       
                                                ))
                                                }
                                        
                                         </tbody>
                                        </Table>

                                </div>
                        </Container>
     
        )
}
