import React from 'react';
import Shankar from './Shankar.jpg';

const UserProfile = () => {
  //   return <div style={{ color: 'green', fontSize: '2rem' }}>UserProfile</div>;

  return (
    <div className="card">
      <div className="img">
        {/* <img
          src="https://storage.googleapis.com/revex-client-portal-production/KWncsuQY9e7Ud3Sa4MKe/users/dc080ab1-3dd0-4995-9ae0-e89f928cb055"
          alt="img"
        /> */}
        <img src={Shankar} alt="" />
      </div>
      <div className="info">
        <h1 className="text-secondary text-center">Shankar</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus harum est nam ea rerum neque vero, ipsum inventore,
          fuga assumenda dolores numquam incidunt distinctio animi, vitae sequi
          rem dicta culpa?
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
