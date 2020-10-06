import React, { Component } from 'react';
import Btn from './styles';

export default class Button extends Component {
    render() {
        return (
            <Btn
                bg={this.props.bg}
                color={this.props.color}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </Btn>
        );
    }
}
