import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <h2>List of Friends</h2>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id}>
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          </li>
        ))}
      </List>
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
