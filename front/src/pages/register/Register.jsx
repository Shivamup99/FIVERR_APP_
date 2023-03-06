import React, { useState } from 'react'
import newRequest from '../../utils/apiRequest'
import upload from '../../utils/uploadCloud'
import { useNavigate} from 'react-router-dom'
import './register.scss'
//import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({username:'',email:'',password:'',img:'',country:'',isSeller:false,desc:'',phone:''})
  const [file,setFile] = useState(null)
  const handleChange=(e)=>{
     setUser((prev)=>{
       return {...prev,[e.target.name]:e.target.value};
     })
  }
  const handelSeller=(e)=>{
    setUser((prev)=>{
      return {...prev,isSeller:e.target.checked}
    })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const url = await upload(file)
    try {
      await newRequest.post("/auth/register",{...user,img:url});
       navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='register'>
      <div className="container">
        <h1>Let's Create a New Account</h1>
          <form onSubmit={handleSubmit} className="sections">
          <div className="left">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='username' name='username' onChange={ handleChange}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='email' name='email' onChange={ handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='password' name='password' onChange={ handleChange}/>
            <label htmlFor="">Profile Picture</label>
            <input type="file" name="img" id="img" onChange={(e)=>setFile(e.target.files[0])}/>
            <label htmlFor="">Country</label>
            <input type="text" placeholder='country' name='country' onChange={ handleChange}/>
            <button type='submit'>Register</button>
          </div>
          <div className="right">
            <div className="toggle">
            <label for="switch">I want to become a Seller</label>
            <input type="checkbox" className='check' onChange={handelSeller}/>
            </div>
            <label htmlFor="">Mobile</label>
            <input type="text" placeholder='phone number' name='phone' onChange={ handleChange}/>
            <label htmlFor="">About Me</label>
            <textarea  name="desc" id="" cols="30" rows="8" onChange={ handleChange} placeholder='Short description about services'></textarea>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Register