// import logo from './logo.svg';
import './App.css';
import UserComponents, { Bio } from './UserComponents.js';

function App() {
  const name = 'Shanakr Pandey';
  const bio = 'Software DEveloper';
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
