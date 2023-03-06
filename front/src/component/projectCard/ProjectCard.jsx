import React from 'react'
import { Link } from 'react-router-dom'
import './PrjectCard.scss'
const ProjectCard = ({item}) => {
  return (
    <Link to='/'>
     <div className='projectCard'>
        <img src={item.thumbnail} alt="dd" />
        <div className="info">
        <img src={item.images[0]} alt="dds" />
        <div className="texts">
            <h2>{item.brand}</h2>
            <span>{item.title}</span>
        </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard