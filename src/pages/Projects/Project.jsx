import React from 'react';
import './project.css';
import view from '../../assets/view.png';


const Project = (props) => {
  return (
    <a href={props.link} className="project">{props.name} <img src={view} alt="icon" className='icon'/></a>
  )
}

export default Project