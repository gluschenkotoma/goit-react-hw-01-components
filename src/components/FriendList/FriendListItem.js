import { Status } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
