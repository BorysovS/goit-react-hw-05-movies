import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;

  &.active {
    color: orangered;
  }
`;

export const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
`;
