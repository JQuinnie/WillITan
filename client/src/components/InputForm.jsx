import React, { useState } from 'react';

const InputForm = () => {
  const [addressInput, setAddressInput] = useState('1500 Wynkoop St, Denver CO, 80211');
  const [location, setLocation] = useState('');
  const url = `http://localhost:3001/tanchecker`;

  function fetchData() {
    fetch(`${url}?address=${addressInput}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((err) => console.error(err));
  }

  function handleAddressChange(e) {
    setAddressInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setAddressInput('');
  }

  // TODO: pull form out as separate component

  return (
    <div>
      <form className="border" onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div className="flex items-center mb-4">
          <label className="text-center text-gray-600 pr-4 w-1/3">Street:</label>
          <input
            className="w-2/3 border"
            type="text"
            value={addressInput}
            onChange={handleAddressChange}
            placeholder="Input Street"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="text-gray-600 pr-4 w-1/3">City:</label>
          <input
            className="w-2/3 border"
            type="text"
            value={addressInput}
            onChange={handleAddressChange}
            placeholder="Input City"
          />
        </div>
        <button className="bg-blue-600 text-gray-300 rounded-lg px-2" type="submit" onClick={handleSubmit}>
          Will I Tan?
        </button>
      </form>

      <div>{JSON.stringify(location)}</div>
    </div>
  );
};

export default InputForm;
