import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
function App() {
  return (
    <>
      <Profile user={user} />
    </>
  );
}

export default App;
