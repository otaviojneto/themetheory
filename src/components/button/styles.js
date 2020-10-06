import Colors from '../../styles/colors';

const { default: styled } = require('styled-components');

const Btn = styled.button`
    background-color: ${props => (props.bg ? props.bg : Colors.primary)};
    color: ${props => (props.color ? props.color : Colors.white)};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
`;

export default Btn;
