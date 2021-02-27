import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export default function Fees() {
        const posts = useSelector((state) => state.shop.fees);
        console.log(posts)
        return (
               
                <Container >
                                <div className="head">
                                        <h2>Fees</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                <thead style={{color:"white",background:"black",height:'140px'}}>
                                                        <th  >Course</th>
                                                        <th className="text-center">Fees</th>
                                                </thead>
                                                <tbody >
                                                 {
                                                 posts.map((e) => (
                                                        
                                                                <tr key={e._id}>
                                                                        <td className="fw-blod   table-success ">{e.course}</td>
                                                                        <td className="fw-bld   secondary">{e.amount} -/</td>
                                                                </tr>
                                                               
                                                       
                                                ))
                                                }
                                        
                                         </tbody>
                                        </Table>

                                </div>
                        </Container>
     
        )
}
