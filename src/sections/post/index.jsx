import React, { Component } from 'react';
import Thumbnail from '../../components/thumbnail';
import Colors from '../../styles/colors';
import { Col, Container, Row } from '../../styles/grid';
import Text from '../../components/text';

export default class Posts extends Component {
    render() {
        return (
            <Container>
                {/* Titutlo*/}
                <Text
                    weight={100}
                    size={40}
                    lineHeight={61}
                    color={Colors.primary}
                    align={'center'}
                    mt={90}
                >
                    {this.props.title}
                </Text>

                {/* Subtitulo */}
                <Text
                    align={'center'}
                    weight={300}
                    lineHeight={24}
                    color={Colors.success}
                    mb={75}
                >
                    {this.props.subtitle}
                </Text>

                <Row pb={this.props.pb}>
                    {this.props.data.map((item, index) => (
                        <Col key={index} xl={6}>
                            <Thumbnail
                                alt={item.alt}
                                btn={item.btn}
                                description={item.description}
                                img={item.img}
                                onClick={item.onClick}
                                title={item.title}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
