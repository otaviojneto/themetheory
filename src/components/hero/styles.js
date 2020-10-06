import styled from 'styled-components';
import Colors from '../../styles/colors';

const DivHero = styled.div`
    align-items: center;
    background-attachment: fixed;
    background-image: url(${props => props.bg && props.bg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 8px solid ${Colors.primary};
    display: flex;
    flex-direction: column;
    height: 457px;
    justify-content: center;
    width: 100%;
`;

export default DivHero;
