import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  margin-bottom: 12px;
  text-align: center;
  display: block;
  max-width: 100px;
  max-height: 50px;
  padding: 12px;
  border: 2px solid black;
  border-radius: 24px;
  text-decoration: none;
  color: black;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #c9c9e7;
  }
`;
