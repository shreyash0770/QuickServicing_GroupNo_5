import React, { Component } from 'react'
import '../services/css/home.css'
import { useState,useEffect }from "react";
import { useHistory } from 'react-router-dom'

 function AdminLogin(){
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");
 const history = useHistory();
  // useEffect(()=>{
  //     if(localStorage.getItem('user-info')){
  //       history.push('/cards');
  //     }
     
  // }
  // ,[])

  async function login(){
    console.warn(email,password);
    let item={email,password};
    let result = await fetch("http://localhost:8080/alogin",{
    
     method:'post',
     headers:{
       "Content-Type":"application/json",
       "Accept":'application/json'
     },
     body:JSON.stringify(item)
    });
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  
  if(item.email== result.email){
    history.push('/adminpage')
  }
  else{
    history.push('/adminlogin')
  }
  
  }




    return (
       

      <div className='AdminLoginPage'>
        <section className="vh-100" >
       <div className="container py-4 h-40" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="" >
     
          <div className="admincardbody p-5 text-center "  >
            
            <h1 style={{color:'whitesmoke'}}>QuickServicing.com</h1>
            <h3 className="mb-5" style={{color:'InfoBackground'}} >Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email"   id="email"
               name="email" className="form-control form-control-lg" placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}  />
             
            </div>

            <div className="form-outline mb-4">
              <input type="password"  id="password"
               name="password" className="form-control form-control-lg" placeholder='password' 
               onChange={(e)=>setPassword(e.target.value)}  />
      
            </div>
            <a onClick={login} className="btn btn-info">Log In</a>

          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

</div>

   
    )
  }

export default AdminLogin;
