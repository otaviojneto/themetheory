import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

const Box = styled.div`
    border: 1px solid ${Colors.white + Opacity.op20};
    border-radius: 2px;
    padding: 44px 24px;

    .image {
        border-radius: 50%;
        display: block;
        height: 168px;
        margin: 0 auto;
        margin-bottom: 16px;
        width: 168px;
    }
`;

export default Box;
