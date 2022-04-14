import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";



export default class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.Adminlogin = this.Adminlogin.bind(this);

    }

    Adminlogin(){
      this.props.history.push('adminlogin');
    }

  render() {
    return (
      <div className=''>
        <div className='loginpage'>
          <div className="row">
  <div className="col-sm-8">
    <div className="card" style={{backgroundColor:"lightgray",marginTop: ""}}>
      <div className="card-body">
        <h5 className="card-title">Admin Login</h5>
       
        <a href="adminlogin" onClick={this.Adminlogin} className="btn btn-info">Log In</a>
      </div>
    </div>
  </div>

  <div className="col-sm-8">
    <div className="card" style={{backgroundColor:"lime",marginTop: ""}}>
      <div className="card-body">
        <h5 className="card-title">Customer Login</h5>
       
        <a href="customerLogin" className="btn btn-success">Log In</a>
      </div>
    </div>
    </div>

  <div className="col-sm-8">
    <div className="card" style={{backgroundColor:"blueviolet",marginTop: ""}}>
      <div className="card-body">
        <h5 className="card-title">Services Login</h5>
       
        <a href="serviceProviderLogin" className="btn btn-success">Log In</a>
      </div>
    </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
