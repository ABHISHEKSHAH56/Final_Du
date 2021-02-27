
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'react-bootstrap';


export default class CutMenuHai extends Component {
        state = { activeItem: 'home' }

        handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        render() {
                const { activeItem } = this.state

                return (
                       <Container>
                                <Menu pointing secondary vertical>
                                <h1 style={{ 'fontFamily': "Nunito", 'fontWeight': 'bold', color: ' #35404e' }}> 2019/General</h1>


                                <Link to={`/overview/${this.props.name}`}>
                                        <Menu.Item className='.cut-list'
                                                name='Round 1'
                                                active={activeItem === 'Round 1'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                               
                                <Link to={`/fees/${this.props.name}`}>
                                        <Menu.Item
                                                name='Round 2'
                                                active={activeItem === 'Round 2'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                                <Link to={`/course/${this.props.name}`}>
                                        <Menu.Item
                                                name='Round 3'
                                                active={activeItem === 'Round 3'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>
                                <Link to={`/cutoff/${this.props.name}`}>
                                        <Menu.Item
                                                name='Round 4'
                                                active={activeItem === 'Round 4'}
                                                onClick={this.handleItemClick}
                                        />
                                </Link>


                        </Menu>
                       </Container>
                )
        }
}