import React from 'react'
import './slider.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cards } from '../../data';
import Card from '../card/Card';
import {Link} from 'react-router-dom'
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
     <Link to='/gigs' className='gig-link'>view more giigs {'>>'}</Link>
    <div className='slider'>
        <div className="container">
        <Carousel responsive={responsive} infinite={true}  autoPlay={true}  autoPlaySpeed={3000}>
       {cards.map((item,i)=>{
        return(
         <Card item={item} key={i}/>
        )
       })}
      </Carousel>;
        </div>
    </div>
    </>
  )
}

export default Slider