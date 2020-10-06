import React, { Component } from 'react';
import { Txt } from './styles';

export default class Text extends Component {
    render() {
        return (
            <Txt
                color={this.props.color}
                lineHeight={this.props.lineHeight}
                mb={this.props.mb}
                mt={this.props.mt}
                size={this.props.size}
                weight={this.props.weight}
            >
                {this.props.children}
            </Txt>
        );
    }
}
