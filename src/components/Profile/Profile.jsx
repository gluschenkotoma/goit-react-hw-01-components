import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';

import defaultAvatar from './defaultAvatar.png';

import { ProfileView, Description, Name } from './Profile.styled';

export const Profile = ({
  avatar = defaultAvatar,
  username,
  tag,
  location,
  stats,
}) => {
  return (
    <ProfileView>
      <Description>
        <img src={avatar ?? defaultAvatar} alt={username} />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <Stats stats={stats} />
    </ProfileView>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
