import React, { Component } from 'react';
import Text from '../../components/text';
import Menu from '../../sections/menu';

export default class NotFound extends Component {
    render() {
        return (
            <>
                <Menu />

                <Text size={50} weigth={700} mt={250} align={'center'}>
                    Página não encontrada!
                </Text>
            </>
        );
    }
}
