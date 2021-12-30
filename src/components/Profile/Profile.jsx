import { Stats } from '../Stats/Stats';

import defaultAvatar from './defaultAvatar.png';

import { ProfileView, Description, Name } from './Profile.styled';

export const Profile = ({
  user: { avatar = defaultAvatar, username, tag, location, stats },
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
