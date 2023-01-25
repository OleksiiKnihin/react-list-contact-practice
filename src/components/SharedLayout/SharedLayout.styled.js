import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: red;

  &:hover,
  &:focus,
  &.active {
    color: blue;
  }
`;
