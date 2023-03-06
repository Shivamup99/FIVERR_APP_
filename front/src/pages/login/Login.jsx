import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/apiRequest";


const Login = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
     const res =  await newRequest.post('/auth/login', {
        username,password
      })
      localStorage.setItem('currentUser',JSON.stringify(res.data));
      navigate('/')
    } catch(err){
      setError(err.response.data);
      console.log(err)
    }
   
  }

  return (
    <div className="login">
      <div className="login-root">   
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    Sign to your account
                  </span>
                  <form onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="field padding-bottom--24">
                        <label htmlFor="password">Password</label>
                      <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                  
                    <div className="field padding-bottom--24-btn">
                      <button
                        type="submit"
                        className="login-btn"
                      >Continue</button>
                    </div>
                    {error && error}
                  </form>
          
                      <Link className="ssolink" to="/register">
                      Don't have an account? Sign up
                      </Link>
                   
                </div>
              </div>
            </div>
          </div>
          </div>
  );
};

export default Login;
