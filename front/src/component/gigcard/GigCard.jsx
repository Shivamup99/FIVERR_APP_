import React from 'react'
import './gigcard.scss'
import { Link } from 'react-router-dom'
const GigCard = ({item}) => {
  return (
    <Link to='/gig/123'>
       <div className='gigcard'>
        <img src={item.images[1]} alt="dd" />
        <div className="info">
            <div className="user">
                <img src={item.thumbnail} alt="ddd" />
                <span>{item.brand}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="/images/star.png" alt="s" />
                <span>{item.rating}</span>
            </div>
        </div>
        <hr/>
        <div className="details">
            <img src="/images/heart.png" alt="h" />
            <div className="price">
            <span>Starting AT</span>
             <h2>${item.price}</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard