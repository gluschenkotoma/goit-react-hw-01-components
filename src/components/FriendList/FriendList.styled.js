import styled from 'styled-components';

export const Friends = styled.section`
  text-align: center;
  width: 300px;
`;

export const List = styled.section`
  margin-bottom: 30px;
  > li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin: 20px;
    padding: 20px;
  }
`;

export const Status = styled.section`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;
