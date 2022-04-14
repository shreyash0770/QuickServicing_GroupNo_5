import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import './services/css/home.css';
import {Nav,NavDropdown} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'






 function Header() {


  let user =JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();
  


 function  signupPage(){
      this.props.history.push('signup');
  }

  function loginPage(){
    this.props.history.push('login');
  }

  function logout(){
    localStorage.clear();
    history.push("/")
    
  }


    return (
      <div className='header'>
           
        <header>
        <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-dark ">
        <ReactBootStrap.Navbar.Brand ><img src="./images/carlogo.png" width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand style={{color:'white'}} href="#home">Quick Servicing</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
        
        <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
        <ReactBootStrap.Nav className="me-auto">

        <ReactBootStrap.Nav.Link className='click' href="/"style={{color:'white'}} >Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link className='click' href="/Contact" style={{color:'white'}} >Contact Us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link className='click' href="/About" style={{color:'white'}} >About Us</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
       
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link className='click' href="login" style={{color:'white'}}  onClick={loginPage}>LOGIN</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link  href="" style={{color:'white'}} disabled>/</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link className='click' href="signup" style={{color:'white'}} onClick={signupPage} >SIGNUP</ReactBootStrap.Nav.Link> 

         {/* { localStorage.getItem('user-info')?  */}
         <Nav>
          <ReactBootStrap.Nav.Link className='click' style={{color:'white'}} onClick={logout} >LOGOUT</ReactBootStrap.Nav.Link> 
          </Nav>
            {/* :null}  */}
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    </header>


      </div>
    )
  }


export default Header;
