import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export default function Round() {
        const posts = useSelector((state) => state.shop.cutoff);
        return (
               
                <Container >
                                <div className="head">
                                        <h2>Overview</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                {posts.map((e) => (
                                                        <tbody key={e._id}>
                                                                <tr key={e.name}>
                                                                        <td className="fw-blod   table-success ">Insitution name</td>
                                                                        <td className="fw-bld   secondary">{e.name}</td>
                                                                </tr>
                                                                <tr key={e.alsoknownas}>
                                                                        <td className="fw-blod   table-success ">Also known as</td>
                                                                        <td className="fw-bld   secondary">{e.alsoknownas}</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-success ">Affilated</td>
                                                                        <td className="fw-bld   secondary">{e.affilated}</td>

                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-secondary ">Campus</td>
                                                                        <td className="fw-bld   secondary">{e.campus}</td>

                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-secondary ">Location</td>
                                                                        <td className="fw-bld   secondary">{e.address}</td>

                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-danger ">NIRF Ranking</td>
                                                                        <td className="fw-bld   secondary"></td>

                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-danger">NAAC'S Rating</td>
                                                                        <td className="fw-bld   secondary"></td>

                                                                </tr>
                                                                <tr>
                                                                        <td className="fw-blod   table-danger">Website</td>

                                                                        <td className=" f-bld   secondary">
                                                                                <Link to={`/${e.website}`}>{e.website}  </Link></td>
                                                                </tr>
                                                        </tbody>
                                                ))
                                                }
                                        </Table>

                                </div>
                        </Container>
     
        )
}
