import React from 'react';

const UserComponents = (props) => {
  console.log([props]);
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.bio}</h2>
    </div>
  );
};

export default UserComponents;

export const Bio = () => {
  return (
    <div>
      <h2>Software Developer</h2>
    </div>
  );
};
