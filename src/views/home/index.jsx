import React, { Component } from 'react';
import Bg from '../../assets/images/banner.jpg';
import Hero from '../../sections/hero';
import More from '../../sections/more';
import Team from '../../sections/team';

export default class Home extends Component {
    state = {
        thumbnail: [
            {
                title: 'Magna tempus sed amet aliquam veroeros',
                description:
                    'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.',
                btn: 'More',
                onClick: () => alert('Boa garoto'),
            },
            {
                title: 'Interdum lorem pulvinar adipiscing vitae',
                description:
                    'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.',
                btn: 'More',
                onClick: () => alert('Ja vi que esta bom'),
            },
            {
                title: 'Libero purus magna sapien sed ullamcorper',
                description:
                    'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.',
                btn: 'More',
                onClick: () => alert('Chega de Clicar!'),
            },
        ],
    };

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

                <More data={this.state.thumbnail} />

                <Team
                    title={'Ipsum Feugiat'}
                    subtitle={'Semper suscipit posuere apede'}
                />
            </>
        );
    }
}
