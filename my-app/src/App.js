// import logo from './logo.svg';
import './App.css';
import UserComponents, { Bio } from './UserComponents.js';
import { useState } from 'react';
function App() {
  // const name = 'Shanakr Pandey';
  // const bio = 'Software DEveloper';
  // const [first, setfirst] = useState();

  const [counter, setCounter] = useState(120);
  // let counter = 120;
  const increase = () => {
    setCounter(counter + 1);
  };
  // console.log(counter);
  return (
    <>
      {/* <UserComponents name={name} />
      <Bio bio={bio} />
      <UserComponents name={'Sam'} />
      <Bio bio={bio} /> */}

      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button>-</button>
    </>
  );
}

export default App;
