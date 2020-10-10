import React, { Component } from 'react';
import { Col, Container, Row } from '../../styles/grid';
import Thumbnail from '../../components/thumbnail';

export default class More extends Component {
    render() {
        return (
            <Container>
                <Row pb={90} pt={90}>
                    {this.props.data.map((item, index) => (
                        <Col key={index} xl={4}>
                            <Thumbnail
                                title={item.title}
                                description={item.description}
                                btn={item.btn}
                                onClick={item.onClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
