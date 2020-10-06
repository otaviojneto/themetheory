import React, { Component } from 'react';
import { Col, Container, Row } from '../../styles/grid';
import Text from '../../components/text';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xl={4}>
                            <Text>Jorge</Text>
                        </Col>
                        <Col xl={4}>Hide</Col>
                        <Col xl={4}>Hide</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
