import React from 'react';

const MyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log('submitted');
  };
  return (
    <form action="" className="card m-auto mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          required
        />
      </div>
      <button className="btn btn-secondary">Submit</button>
    </form>
  );
};

export default MyForm;
