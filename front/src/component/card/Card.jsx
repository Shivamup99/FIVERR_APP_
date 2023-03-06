import React from 'react'
import './card.scss'
const Card = ({item}) => {
  return (
    
     <div className='card'>
        <div className="container">
         <img src={item.image} alt="ss" />
         <span className='desc'>{item.des}</span>
         <div className="title">{item.title}</div>
        </div>
    </div>
    
  )
}

export default Card