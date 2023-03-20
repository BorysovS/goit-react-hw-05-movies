import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 2px solid #519c80;
  border-radius: 4px;
  padding: 4px;
  margin-left: 30px;
  font-size: 14px;
`;

export const SearchBtn = styled.button`
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid transparent;
  margin-left: 4px;
  background-color: #bfd7f1;
  font-weight: 700;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    background-color: #6bceab;
  }
`;
