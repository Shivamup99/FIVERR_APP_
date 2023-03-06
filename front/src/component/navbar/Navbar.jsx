import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/apiRequest';

const Navbar = () => {
  const [active , setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isActive=()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return()=>{
      window.removeEventListener("scroll",isActive);
    }
  },[]);

  const currentUser= JSON.parse(localStorage.getItem("currentUser")); 


  const handleLogout= async()=>{
    try{
      await newRequest.post('/auth/logout')
      localStorage.setItem("currentUser",null);
      navigate('/')
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className={active || pathname!=='/' ? 'navbar active':'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to='/'>
          <span className="text">Multi</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          {!currentUser?.result.isSeller && <span>Become a Seller</span>}
          <span>English</span>
          {!currentUser && <Link to='/login'>Sign In</Link>}
          {!currentUser && <Link className='btn-join' to='/register'>Join</Link>}
          {currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}>
              <img src={currentUser?.result.img || 'https://www.befunky.com/images/prismic/d5660d64-faac-42a9-81fd-137f392812a3_hair-color.jpg?auto=avif,webp&format=jpg&width=1920&height=1920&fit=bounds'} alt='user'/>
              <span>{currentUser?.result.username}</span>
              { open && <div className="options">
                {currentUser && (
                  <>
                  <Link to="/myGigs">Gigs</Link>
                  <Link to="/add">Add new Gigs</Link>
                  </>
                )}
                <Link to='/orders'>Orders</Link>
                <Link to='/messages'>Messages</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            }
            </div>
            
          )}
        </div>
      </div>
      {(active || pathname !=='/' )&& 
      <>
       <hr/>
      <div className="menu">
       <Link to='/' className='menuLink'>Graphics & Design</Link>
       <Link to='/' className='menuLink'>Video & Animation</Link>
       <Link to='/' className='menuLink'>Writting & Translation</Link>
       <Link to='/' className='menuLink'>AI Services</Link>
       <Link to='/' className='menuLink'>Digital Marketing</Link>
       <Link to='/' className='menuLink'>Music & Audio</Link>
       <Link to='/' className='menuLink'>Programming & Tech</Link>
       <Link to='/' className='menuLink'>Business</Link>
       <Link to='/' className='menuLink'>Lifestyle</Link>
      </div>
      </>
      }
     
    </div>
  )
}

export default Navbar