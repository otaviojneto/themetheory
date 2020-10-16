import styled from 'styled-components';
import Colors from '../../styles/colors';

const Box = styled.div`
    border-top: 1px solid ${Colors.transparent};
    display: flex;
    justify-content: space-between;
    padding-bottom: 48px;
    padding-top: 48px;
`;

export const List = styled.ul`
    display: flex;

    .item {
        margin-right: 16px;

        &:last-of-type {
            margin-right: 0;
        }

        .link {
            color: ${Colors.primary};
            cursor: pointer;
        }
    }
`;

export default Box;
