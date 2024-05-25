// import logo from './logo.svg';
import './App.css';
import UserComponents, { Bio } from './UserComponents.js';
import useState from 'react';
function App() {
  const name = 'Shanakr Pandey';
  const bio = 'Software DEveloper';
  const [first, setfirst] = useState();

  return (
    <>
      <UserComponents name={name} />
      <Bio bio={bio} />
      <UserComponents name={'Sam'} />
      <Bio bio={bio} />
    </>
  );
}

export default App;
