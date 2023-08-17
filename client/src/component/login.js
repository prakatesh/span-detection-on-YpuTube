import React, { useState } from 'react'
import '../asset/login.css'
import axios from 'axios'
function Login() {
    const [email,setmail]=useState('')
    const [password,setpass]=useState('')
    function submit(){
        axios.post(
            "http://localhost:8000/login",
            {
                email:email,
                password:password
            }).then(function (response) {
                console.log(response.data.data);
                if(response.data.data)
                {
                    alert("welcome")
                }
                else{
                    alert("Check the email or password")
                }
              })
              .catch(function (error) {
                console.log(error);
              });
    }
  return (
    <>
    <div class="login-box">
    <h2>Login</h2>
    <form>
        <div class="user-box">
            <input type="text"value={email} onChange={(e)=>{setmail(e.target.value)}}/>
            <label>Username</label>
        </div>
        <div class="user-box">
            <input type="password" value={password} onChange={(e)=>{setpass(e.target.value)}} />
            <label>Password</label>
        </div>
        <a onClick={submit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
        </a>
    </form>
    </div>
   </>
  )
}

export default Login
