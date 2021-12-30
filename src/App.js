import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import user from 'components/data/user.json';
import statisticsItems from 'components/data/data.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics items={statisticsItems} />
    </>
  );
}

export default App;
