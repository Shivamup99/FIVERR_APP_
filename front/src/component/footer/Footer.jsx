import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <hr/>
        <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <Link to='/' className='menuLink'>Graphics & Design</Link>
          <Link to='/' className='menuLink'>Video & Animation</Link>
          <Link to='/' className='menuLink'>Writting & Translation</Link>
          <Link to='/' className='menuLink'>AI Services</Link>
          <Link to='/' className='menuLink'>Digital Marketing</Link>
        </div>
        <div className="item">
          <h2>Categories</h2>
          <Link to='/' className='menuLink'>Graphics & Design</Link>
          <Link to='/' className='menuLink'>Video & Animation</Link>
          <Link to='/' className='menuLink'>Writting & Translation</Link>
          <Link to='/' className='menuLink'>AI Services</Link>
          <Link to='/' className='menuLink'>Digital Marketing</Link>
        </div>
        <div className="item">
          <h2>Categories</h2>
          <Link to='/' className='menuLink'>Graphics & Design</Link>
          <Link to='/' className='menuLink'>Video & Animation</Link>
          <Link to='/' className='menuLink'>Writting & Translation</Link>
          <Link to='/' className='menuLink'>AI Services</Link>
          <Link to='/' className='menuLink'>Digital Marketing</Link>
        </div>
        <div className="item">
          <h2>Categories</h2>
          <Link to='/' className='menuLink'>Graphics & Design</Link>
          <Link to='/' className='menuLink'>Video & Animation</Link>
          <Link to='/' className='menuLink'>Writting & Translation</Link>
          <Link to='/' className='menuLink'>AI Services</Link>
          <Link to='/' className='menuLink'>Digital Marketing</Link>
        </div>
        <div className="item">
          <h2>Categories</h2>
          <Link to='/' className='menuLink'>Graphics & Design</Link>
          <Link to='/' className='menuLink'>Video & Animation</Link>
          <Link to='/' className='menuLink'>Writting & Translation</Link>
          <Link to='/' className='menuLink'>AI Services</Link>
          <Link to='/' className='menuLink'>Digital Marketing</Link>
        </div>
        </div>
        <hr/>
        <div className="bottom">
          <div className="left">
           <h2>VIKINGS.</h2>
           <span>&copy; Vikings International Pvt. 2023</span>
          </div>
          <div className="right">
           <div className="social">
            <img src="/images/linkedin.svg" alt="l" />
            <img src="/images/github.svg" alt="g" />
            <img src="/images/instagram.svg" alt="i" />
            <img src="/images/google.svg" alt="gl" />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer