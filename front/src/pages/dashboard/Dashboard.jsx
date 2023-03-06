import React from 'react'
import Hero from '../../component/hero/Hero'
import Slider from '../../component/slider/Slider'
import Slider2 from '../../component/slider/Slider2'
import './dashboard.scss'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Hero/>
      <Slider/>
      <div className="features">
        <div className="container">
          <div className="item">
          <h1>A whole world freelance even VIKINGS !</h1>
          <div className="title">
            <img src="/images/check.png" alt="s" />
            <span>The best every budget</span> 
          </div>
          <p>
            Find high quality VIKINGS for do your job at right time !
          </p>
          <div className="title">
            <img src="/images/check.png" alt="s" />
            <span>The best every budget</span> 
          </div>
          <p>
            Find high quality VIKINGS for do your job at right time !
          </p>
          <div className="title">
            <img src="/images/check.png" alt="s" />
            <span>The best every budget</span> 
          </div>
          <p>
            Find high quality VIKINGS for do your job at right time !
          </p>
          <div className="title">
            <img src="/images/check.png" alt="s" />
            <span>The best every budget</span> 
          </div>
          <p>
            Find high quality VIKINGS for do your job at right time !
          </p>
          </div>
          
          <div className="item">
            <video autoplay muted loop src='/images/szene13.mp4' controls/>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
          <h2>VIKINGS Business</h2>
          <h1>A Business solution by RAGNOR</h1>
          <p>Upgrade to a curted experience packed with tools and benifits dedicated</p>
          <div className="title">
          <img src="/images/check.png" alt="s" />
          <span>Contact to the Ragnor to get knowledge</span> 
          </div>
          <div className="title">
          <img src="/images/check.png" alt="s" />
            <span>Contact to the Ragnor to get knowledge</span> 
          </div>
          <div className="title">
          <img src="/images/check.png" alt="s" />
          <span>Contact to the Ragnor to get knowledge</span> 
          </div>
          <button>Explore Vikings Business</button>
          </div>
          
          <div className="item">
           <img src="https://st.depositphotos.com/1025323/1898/i/950/depositphotos_18989739-stock-photo-intelligent-life-backdrop.jpg" alt="d" />
          </div>
        </div>
      </div>
      <Slider2/>
    </div>
  )
}

export default Dashboard