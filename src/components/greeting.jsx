import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const data = useSelector((state) => state.greetingReducer);
  return (
    <div>
      <span>{data[0]}</span>
    </div>
  );
};
export default Greeting;
