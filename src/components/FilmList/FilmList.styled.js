import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #0f2e44;
`;

export const FilmListItem = styled.li`
  width: 500px;
  border: 1px solid black;
  padding: 12px;
  text-align: center;
  border-radius: 12px;
  background-color: #e5eced;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #a9d4db;
  }
`;
