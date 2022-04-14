import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";


export default class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.customerSignupPage = this.customerSignupPage.bind(this);
      this.serviceproviderSignupPage =this.serviceproviderSignupPage.bind(this);

    }

    customerSignupPage(){
      this.props.history.push('add-customer');
    }

    serviceproviderSignupPage(){
      this.props.history.push('ServiceProviderSignUp')
    }

  render() {
    return (
      <div className=''>
        <div className='signuppage'>
          <div className="row">
  <div className="col-sm-6">
    <div className="card" style={{backgroundColor:"lightgray",marginTop: "60px"}}>
      <div className="card-body">
        <h5 className="card-title">Customer SignUp</h5>
        <p className="card-text">Fill your information below and get best services.</p>
        <a href="add-customer" onClick={this.customerSignupPage} className="btn btn-info">Sign Up</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card" style={{backgroundColor:"lime",marginTop: "60px"}}>
      <div className="card-body">
        <h5 className="card-title">Services SignUp</h5>
        <p className="card-text">Fill your information below and serve your best.</p>
        <a href="ServiceProviderSignUp" onClick={this.serviceproviderSignupPage} className="btn btn-success">Sign Up</a>
      </div>
    </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
