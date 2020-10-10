import React, { Component } from 'react';
import Colors from '../../styles/colors';
import Text from '../text';
import Box from './styles';

class Users extends Component {
    render() {
        return (
            <Box>
                {/* imagem */}
                <img
                    className="image"
                    src={this.props.img}
                    alt={this.props.alt}
                />
                {/* titutlo (nome) */}
                <Text
                    align={'center'}
                    weight={300}
                    size={20}
                    lineHeight={30}
                    color={Colors.white}
                >
                    {this.props.name}
                </Text>
                {/* descrição */}
                <Text
                    align={'center'}
                    weight={300}
                    size={15}
                    lineHeight={24}
                    color={Colors.lightBlue}
                >
                    {this.props.description}
                </Text>
            </Box>
        );
    }
}

export default Users;
