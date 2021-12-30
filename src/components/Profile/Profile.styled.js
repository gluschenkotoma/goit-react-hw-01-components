import styled from 'styled-components';

export const ProfileView = styled.div`
  margin: 20px;
  width: 270px;
  box-shadow: 0px 15px 22px 0px rgba(34, 60, 80, 0.2);
  border-radius: 7px;
`;
export const Description = styled.div`
  padding-top: 5px;
  > img {
    background-color: rgb(186, 201, 235);
    border-radius: 7px;
    box-shadow: 0px 15px 22px 0px rgba(34, 60, 80, 0.2);
    margin-left: auto;
    margin-right: auto;
    width: 150px;
  }
  > p {
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

export const Name = styled.p`
  font-size: 25px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
`;
