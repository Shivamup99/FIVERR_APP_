import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <h1>Find the freelance services for your business </h1>
                <div className="search">
                <div className="searchInput">
                    <img src="/images/search.png" alt="" />
                    <input type="text" placeholder='Try "building mobile app"'/>
                </div>
                <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>Wordpress</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
               <img src="https://www.bonobology.com/wp-content/uploads/2020/11/Make-her-laugh-with-funny-secrets.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero