import React, { Component } from 'react';
import DivHero from './styles';
import Text from '../text';
import Colors from '../../styles/colors';

export default class Hero extends Component {
    render() {
        return (
            <DivHero bg={this.props.bg}>
                <Text
                    color={Colors.white}
                    lineHeight={50}
                    mb={20}
                    size={51}
                    weight={100}
                >
                    {this.props.title}
                </Text>

                <Text color={Colors.light} lineHeight={24} weight={300}>
                    {this.props.subtitle}
                </Text>
            </DivHero>
        );
    }
}
