import React, { Component } from 'react';
import Text from '../../components/text';
import Menu from '../../sections/menu';
import Colors from '../../styles/colors';
import { Container } from '../../styles/grid';
import pic01 from '../../assets/images/pic01.jpg';
import pic02 from '../../assets/images/pic02.jpg';
import Posts from '../../sections/post';
import Footer from '../../sections/footer';

export default class Generic extends Component {
    state = {
        type: [
            {
                text:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            },
            {
                text:
                    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
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
            <div>
                <Menu />

                <Text
                    align={'center'}
                    color={Colors.primary}
                    lineHeight={72}
                    mb={8}
                    mt={270}
                    size={48}
                    weight={100}
                >
                    Nunc Dignissim
                </Text>

                <Text
                    align={'center'}
                    color={Colors.success}
                    lineHeight={29}
                    mb={60}
                    size={17}
                    weight={300}
                >
                    Aliquam erat volutpat nam dui
                </Text>

                <Container>
                    {this.state.type.map((item, index) => (
                        <Text
                            key={index}
                            color={Colors.greyFast}
                            lineHeight={29}
                            mb={32}
                            size={17}
                            weight={300}
                        >
                            {item.text}
                        </Text>
                    ))}
                </Container>

                <Posts data={this.state.posts} pb={100} />

                <Footer />
            </div>
        );
    }
}
