import React, { Component } from 'react';
import Text from '../text';
import Button from '../button';
import Colors from '../../styles/colors';

class Thumbnail extends Component {
    render() {
        return (
            <div>
                {/* imagem  */}
                {this.props.img && (
                    <img src={this.props.img} alt={this.props.alt} />
                )}

                {/* titulo */}
                <Text
                    weight={300}
                    size={20}
                    lineHeight={30}
                    color={Colors.primary}
                    mb={20}
                >
                    {this.props.title}
                </Text>

                {/* texto */}
                <Text
                    weight={300}
                    size={15}
                    lineHeight={24}
                    color={Colors.greyFast}
                    mb={32}
                >
                    {this.props.description}
                </Text>

                {/* botão */}
                <Button onClick={this.props.onClick}>{this.props.btn}</Button>
            </div>
        );
    }
}

export default Thumbnail;
