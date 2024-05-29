import React from 'react';
import { useRef } from 'react';

const MyForm = () => {
  const address = useRef('');
  //   console.log(address);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log('submitted');
    console.log(address.current.value);
  };
  const handleOnChange = (e) => {
    // console.log(e.target.value);
  };
  return (
    <form action="" className="card m-auto mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        {/* <input
          type="text"
          className="form-control"
          placeholder="name"
          required
          onChange={handleOnChange}
        /> */}
        <input
          type="text"
          className="form-control"
          placeholder="email"
          required
          ref={address}
        />
      </div>
      <button className="btn btn-secondary">Submit</button>
    </form>
  );
};

export default MyForm;
