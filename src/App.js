import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

import user from 'components/data/user.json';
import statisticsItems from 'components/data/data.json';
import friends from 'components/data/friends.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics items={statisticsItems} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
