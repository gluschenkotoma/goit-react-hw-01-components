import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
function App() {
  return (
    <>
      <GlobalStyle />
      <Profile user={user} />
    </>
  );
}

export default App;
