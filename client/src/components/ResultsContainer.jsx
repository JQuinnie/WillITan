import React from 'react';

const ResultsContainer = (props) => {
  return (
    <div className="container">
      <div className="bg-green-100">Results</div>
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
};

export default ResultsContainer;
