import styled from 'styled-components';
import Colors from '../../styles/colors';

const Ground = styled.div`
    background-color: ${props => (props.bg ? props.bg : Colors.primary)};
    padding: 90px 0;
`;

export default Ground;
