import React from 'react';
import './counter.css';

const Counter = (props) => {
  return (
    <h1 className='count'>{props.value}</h1>
  )
}

export default Counter