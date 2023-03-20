import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #0f2e44;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FilmListItem = styled.li`
  width: 500px;
  border: 1px solid black;
  height: 70px;
  text-align: center;
  border-radius: 12px;
  background-color: #e5eced;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #a9d4db;
  }
`;

export const FilmTitle = styled.h2`
  margin: 0;
`;
