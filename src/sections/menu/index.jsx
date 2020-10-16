import React, { Component } from 'react';
import Nav from '../../components/nav';

export default class Menu extends Component {
    render() {
        return (
            <Nav>
                <nav>
                    <ul>
                        <a href="#">Theory</a>
                        <a href="#">Home</a>
                        <a href="#">Generic</a>
                        <a href="#">Elements</a>
                    </ul>
                </nav>
            </Nav>
        );
    }
}
