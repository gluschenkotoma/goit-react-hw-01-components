import { Stats } from '../Stats/Stats';
import s from './Profile.module.scss';
import defaultAvatar from './defaultAvatar.png';

export const Profile = ({
  user: { avatar = defaultAvatar, username, tag, location, stats },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar ?? defaultAvatar}
          alt={username}
          className={s.avatar}
        />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
};
