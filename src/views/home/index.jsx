import Bg from '../../assets/images/banner.jpg';
import Hero from '../../sections/hero';
import Menu from '../../sections/menu';
import More from '../../sections/more';
import pic01 from '../../assets/images/pic01.jpg';
import pic02 from '../../assets/images/pic02.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import pic05 from '../../assets/images/pic05.jpg';
import pic06 from '../../assets/images/pic06.jpg';
import Posts from '../../sections/post';
import React, { Component } from 'react';
import Team from '../../sections/team';
import Footer from '../../sections/footer';

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
        posts: [
            {
                alt: 'pic01',
                img: pic01,
                title: 'Praesent placerat magna',
                description:
                    'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor lorem ipsum.',
                btn: 'More',
                onClick: () => this.handleAlert('uhulll'),
            },
            {
                alt: 'pic02',
                img: pic02,
                title: 'Fusce pellentesque tempus',
                description:
                    'Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.',
                btn: 'More',
                onClick: () => this.handleAlert('Posteeeeee'),
            },
        ],
    };

    render() {
        return (
            <>
                <Menu home />

                <Hero
                    bg={Bg}
                    subtitle={
                        'A free responsive HTML5 website template by TEMPLATED.'
                    }
                    title={'Welcome to Theory'}
                />

                <More data={this.state.thumbnail} />

                <Team
                    data={this.state.team}
                    subtitle={'Semper suscipit posuere apede'}
                    title={'Ipsum Feugiat'}
                />

                <Posts
                    data={this.state.posts}
                    subtitle={'Aliquam erat volutpat nam dui'}
                    title={'Nunc Dignissim'}
                    pb={200}
                />

                <Footer />
            </>
        );
    }

    // ====================================================
    //                                            Functions
    // ====================================================
    handleAlert(txt) {
        alert(txt);
    }
}
