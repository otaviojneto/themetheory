import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Txt = styled.p`
    color: ${props => (props.color ? props.color : Colors.grey)};
    font-size: ${props => (props.size ? props.size : 16)}px;
    font-weight: ${props => props.weight && props.weight};
    line-height: ${props => props.lineHeight && props.lineHeight + 'px'};
    margin-bottom: ${props => props.mb && props.mb + 'px'};
    margin-top: ${props => props.mt && props.mt + 'px'};
`;
