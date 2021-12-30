import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputForm = () => {
  const [addressInput, setAddressInput] = useState({
    street1: '1500 Wynkoop St',
    street2: '',
    city: 'Denver',
    state: 'CO',
    zipCode: '80211',
  });
  const [skinTypeInput, setSkinTypeInput] = useState('0');
  const [location, setLocation] = useState('');

  const { handleSubmit, register } = useForm();
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

  function onSubmit(data) {
    // e.preventDefault();
    // fetchData();
    // setAddressInput('');
    console.log('on submit data: ', data);
  }

  // TODO: pull form out as separate component

  return (
    <div className="flex flex-col">
      <form className="border p-2" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="flex justify-center m-2">ADDRESS</h1>
        <div className="flex flex-col">
          {Object.keys(addressInput).map((key, idx) => (
            <div className="flex pb-4" key={`${key}-${idx}`}>
              <label className="flex justify-end text-gray-600 pr-4 w-1/3 ">{key}:</label>
              <input
                className="w-2/3 border"
                type="text"
                defaultValue={addressInput[key]}
                placeholder={`Input ${key}`}
                {...register(key)}
              />
            </div>
          ))}
        </div>
        <h1 className="flex justify-center m-2">SKIN TYPE</h1>
        <div className="flex pb-4">
          <label className="flex justify-end text-gray-600 pr-4 w-1/3">Select Skin Type</label>
          <select {...register('skinType')}>
            <option value="1">Type 1: very fair skin</option>
            <option value="2">Type 2: fair skin, light eyes and hair</option>
            <option value="3">Type 3: fair skin, any eye or hair color</option>
            <option value="4">Type 4: olive skin, dark brown hair</option>
            <option value="5">Type 5: brown skin, dark hair</option>
            <option value="6">Type 6: black skin</option>
          </select>
        </div>
        <div className="flex justify-center item-align m-4">
          <input
            className="bg-sky-600 text-gray-300 rounded-lg px-2 hover:bg-sky-700 cursor-pointer"
            type="submit"
            value="Check My Tan"
          />
        </div>
      </form>

      <div>{JSON.stringify(location)}</div>
    </div>
  );
};

export default InputForm;
