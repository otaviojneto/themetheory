import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

const Nav = styled.nav`
    background-color: ${props => (props.home ? 'transparent' : Colors.primary)};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 48px;
    padding-top: 48px;

    .brand {
        color: ${Colors.white};
        font-size: 17px;
        font-weight: 600;
        line-height: 56px;
    }

    .menu {
        display: flex;

        .item {
            margin-right: 16px;

            &:last-of-type {
                margin-right: 0;
            }

            .link {
                color: ${Colors.white + Opacity.op80};
                cursor: pointer;
                font-size: 14px;
                font-weight: 300;
                line-height: 56px;
                transition: 0.15s ease-in-out;

                &:hover {
                    color: ${Colors.white};
                }
            }
        }
    }
`;

export default Nav;
