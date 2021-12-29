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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
        </label>
        <input type="text" value={addressInput} onChange={handleAddressChange} placeholder="Input Address" />
        <input type="submit" value="Submit" />
      </form>

      <div>{JSON.stringify(location)}</div>
    </div>
  );
};

export default InputForm;
