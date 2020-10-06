import React, { Component } from 'react';
import Hero from '../../components/hero';
import Bg from '../../assets/images/banner.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero
                    bg={Bg}
                    title={'Welcome to Theory'}
                    subtitle={
                        'A free responsive HTML5 website template by TEMPLATED.'
                    }
                />
            </>
        );
    }
}
