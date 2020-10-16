import React, { Component } from 'react';
import { Container } from '../../styles/grid';
import Nav, { Box } from './styles';

export default class Menu extends Component {
    state = {
        menu: [
            {
                name: 'Home',
                link: '/',
            },
            {
                name: 'Generic',
                link: '/generic',
            },
            {
                name: 'Elements',
                link: '/elements',
            },
        ],
    };

    render() {
        return (
            <Nav home={this.props.home}>
                <Container>
                    <Box>
                        <a href="/" className="brand">
                            Theory
                        </a>

                        <ul className="menu">
                            {this.state.menu.map((item, index) => (
                                <li key={index} className="item">
                                    <a className="link" href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Container>
            </Nav>
        );
    }
}
