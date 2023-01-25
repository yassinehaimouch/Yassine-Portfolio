import React from 'react';
import './title.css';

const Title = (props) => {
  return (
    <h1 className='title'>{props.value}</h1>
  )
}

export default Title