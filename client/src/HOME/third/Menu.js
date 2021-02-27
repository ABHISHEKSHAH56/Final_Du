
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'react-bootstrap';
import '../extra/Landkro.css'

export default class MenuHai extends Component {
        state = { activeItem: 'Overview' }

        handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        render() {
                const { activeItem } = this.state

                return (
                       <Container>
                                <Menu pointing secondary vertical>
                                <h1 style={{ 'fontFamily': "Nunito", 'fontWeight': 'bold', color: ' #35404e' }}> Categorey</h1>


                                <Link to={`/overview/${this.props.name}`}>
                                        <Menu.Item className='.cut-list'
                                                name='Overview'
                                                active={activeItem === 'Overview'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                               
                                <Link to={`/fees/${this.props.name}`}>
                                        <Menu.Item
                                                name='Fees'
                                                active={activeItem === 'Fees'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                                <Link to={`/course/${this.props.name}`}>
                                        <Menu.Item
                                                name='Course'
                                                active={activeItem === 'Course'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                                <Link to={`/cutoff/${this.props.name}`}>
                                        <Menu.Item
                                                name='CutOff'
                                                active={activeItem === 'CutOff'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>


                        </Menu>
                       </Container>
                )
        }
}