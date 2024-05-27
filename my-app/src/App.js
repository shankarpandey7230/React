// import logo from './logo.svg';
import './App.css';
import UserComponents, { Bio } from './UserComponents.js';
import { useState } from 'react';
import UserProfile from './UserProfile.js';
function App() {
  // const name = 'Shanakr Pandey';
  // const bio = 'Software DEveloper';
  // const [first, setfirst] = useState();

  const [counter, setCounter] = useState(120);
  // let counter = 120;
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  // console.log(counter);
  return (
    <div className="user-Page" style={{ background: 'black', color: 'white' }}>
      <UserProfile />
      {/* <UserComponents name={name} />
      <Bio bio={bio} />
      <UserComponents name={'Sam'} />
      <Bio bio={bio} /> */}
      {/* 
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button> */}
    </div>
  );
}

export default App;
