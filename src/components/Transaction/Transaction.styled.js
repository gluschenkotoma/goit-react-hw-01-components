import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  > th,
  td {
    padding: 8px;
    border: 1px solid #212121;
  }
`;

export const Tbody = styled.tbody`
  border-collapse: collapse;
  > tr:hover {
    background-color: tomato;
    color: white;
    cursor: pointer;
  }
`;
