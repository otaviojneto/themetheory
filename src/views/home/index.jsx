import React, { Component } from 'react';
import Bg from '../../assets/images/banner.jpg';
import Hero from '../../sections/hero';
import More from '../../sections/more';
import Team from '../../sections/team';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import pic05 from '../../assets/images/pic05.jpg';
import pic06 from '../../assets/images/pic06.jpg';

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
        team: [
            {
                img: pic03,
                alt: 'pic03',
                title: 'Ipsum Feugiat',
                subtitle: 'Cipdum dolor',
            },
            {
                img: pic04,
                alt: 'pic04',
                title: 'Ipsum Feugiat',
                subtitle: 'Vestibulum comm',
            },
            {
                img: pic05,
                alt: 'pic05',
                title: 'Ipsum Feugiat',
                subtitle: 'Fusce pellentes',
            },
            {
                img: pic06,
                alt: 'pic06',
                title: 'Ipsum Feugiat',
                subtitle: 'Praesent placer',
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
                    data={this.state.team}
                />
            </>
        );
    }
}
