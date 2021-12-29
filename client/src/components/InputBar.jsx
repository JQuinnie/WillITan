import React, { useState } from 'react';

const InputBar = () => {
  const [input, setInput] = useState('1500 Wynkoop St, Denver CO, 80211');
  const [location, setLocation] = useState('');
  const url = `http://localhost:3001/tanchecker`;

  function fetchData() {
    fetch(`${url}?address=${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((err) => console.error(err));
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setInput('');
  }

  return (
    <div>
      <input value={input} onChange={handleChange} placeholder="Input Address" />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div>{JSON.stringify(location)}</div>
    </div>
  );
};

export default InputBar;
