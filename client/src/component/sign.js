import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate}  from 'react-router-dom'
function Sign() {
    const navgiate=useNavigate()
    const [email,setmail]=useState('')
    const [password,setpass]=useState('')
    function submit(){
        axios.post(
            "http://localhost:8000/sign",
            {
                email:email,
                password:password
            }).then(function (response) {
                console.log(response.data.status);
                if(response.data.status===200)
                {
                    navgiate('/')
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
    <h2>Sign</h2>
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

export default Sign
