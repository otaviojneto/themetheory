import React, { Component } from 'react';
import Text from '../../components/text';
import Users from '../../components/users';
import Colors from '../../styles/colors';
import { Container } from '../../styles/grid';
import Ground from './styles';

export default class Team extends Component {
    render() {
        return (
            <Ground bg={this.props.bg}>
                <Container>
                    {/* Titulo users */}
                    <Text
                        weight={100}
                        size={40}
                        lineHeight={61}
                        color={Colors.white}
                        align={'center'}
                    >
                        {this.props.title}
                    </Text>

                    {/* Subtitulo */}
                    <Text
                        align={'center'}
                        weight={300}
                        lineHeight={24}
                        color={Colors.lightOpacity}
                        mb={75}
                    >
                        {this.props.subtitle}
                    </Text>

                    <Users name={'Name'} description={'olsssssssssss'} />

                    {/* criar props data */}
                </Container>
            </Ground>
        );
    }
}
