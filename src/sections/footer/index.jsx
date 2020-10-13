import React, { Component } from 'react';
import Text from '../../components/text';
import Colors from '../../styles/colors';
import { Container } from '../../styles/grid';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaParking,
    FaVimeoV,
} from 'react-icons/fa';
import Box, { List } from './styles';

export default class Footer extends Component {
    state = {
        midias: [
            {
                name: 'Facebook',
                link: '#Facebook',
            },
            {
                name: 'Twitter',
                link: '#Twitter',
            },
            {
                name: 'Linkedin',
                link: '#Linkedin',
            },
            {
                name: 'Pointerest',
                link: '#Pointerest',
            },
            {
                name: 'Vimeo',
                link: '#Vimeo',
            },
        ],
    };

    render() {
        return (
            <Container>
                <Box>
                    <Text
                        weigth={300}
                        size={14}
                        lineHeigth={23}
                        color={Colors.success}
                    >
                        © Untitled. Design: TEMPLATED. Images: Unsplash.
                    </Text>

                    <List>
                        {this.state.midias.map((item, index) => {
                            let icon = '';

                            switch (item.name) {
                                case 'Facebook':
                                    icon = <FaFacebookF />;
                                    break;
                                case 'Twitter':
                                    icon = <FaTwitter />;
                                    break;
                                case 'Linkedin':
                                    icon = <FaLinkedin />;
                                    break;
                                case 'Pointerest':
                                    icon = <FaParking />;
                                    break;
                                case 'Vimeo':
                                    icon = <FaVimeoV />;
                                    break;

                                default:
                                    break;
                            }

                            return (
                                <li key={index} className="item">
                                    <a
                                        className="link"
                                        href={item.link}
                                        title={item.name}
                                    >
                                        {icon}
                                    </a>
                                </li>
                            );
                        })}
                    </List>
                </Box>
            </Container>
        );
    }
}
