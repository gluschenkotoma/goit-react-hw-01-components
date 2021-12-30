import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  :not(:last-child) {
    border-right: 1px solid black;
  }
`;
export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 5px 0 5px;
  background-color: rgb(186, 201, 235);
  text-align: center;
  box-shadow: 11px 0px 6px -8px rgba(34, 60, 80, 0.2);
`;

export const Label = styled.span`
  font-size: 12px;
  text-transform: lowercase;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
