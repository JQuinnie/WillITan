import React from 'react';
import InputForm from './components/InputForm';

import './App.css';

const App = () => (
  <div className="container flex flex-col mx-auto px-4 w-1/2">
    <h2 className="text-2xl text-center">Will I Tan?</h2>
    <InputForm />
  </div>
);

export default App;
