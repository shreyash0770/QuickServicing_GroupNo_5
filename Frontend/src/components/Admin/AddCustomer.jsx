import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

import CustomerService from '../services/CustomerService'

export default class AddCustomer extends Component {
constructor(props) {
  super(props)

  this.state = {
    name:'',
    email:'',
    city:'',
    address:'',
    pincode:'',
    mobile:'',
    password:'',

    error:'',
    nameerror:'',
    emailerror:'',
    passworderror:'',
    cityerror:'',
    addresserror:'',
    pincodeerror:'',
    mobileerror:''
  
     
  }
  this.changeNameHandler = this.changeNameHandler.bind(this);
  this.changeEmailHandler= this.changeEmailHandler.bind(this);
  this.changeCityHandler= this.changeCityHandler.bind(this);
  this.changeAddressHandler= this.changeAddressHandler.bind(this);
  this.changePincodeHandler= this.changePincodeHandler.bind(this);
  this.changeMobileHandler= this.changeMobileHandler.bind(this);
  this.changePasswordHandler= this.changePasswordHandler.bind(this);
  this.registerCustomer= this.registerCustomer.bind(this);


  
}

valid(){

    if(this.state.name.length<2 && !this.state.email.includes("@") &&
    this.state.password.length<5 && this.state.city.length<2 &&
    this.state.address.length<2 && this.state.pincode.length<6 &&
    this.state.mobile.length==10){
        this.setState({error:"something went wrong!"}); 
    }

     else if (this.state.name.length<2)
    {
        this.setState({nameerror:"Invalid Name"});      
    }
    else if(!this.state.email.includes("@") )
    {
        this.setState({emailerror:"email is not valid"});      
    }
    else if(this.state.password.length<5)
    {
      this.setState({ passworderror:"password must be greater than 5" })
    }
    else if(this.state.city.length<2)
    {
        this.setState({cityerror:"Invalid City"});      
    }
    else if(this.state.address.length<2)
    {
        this.setState({addresserror:"Invalid Address"});      
    }
    else if(this.state.pincode.length<6)
    {
      this.setState({ pincodeerror:"pincode is valid" })
    }
    else if(this.state.mobile.length<10 || this.state.mobile.length>10)
    {
      this.setState({ mobileerror:"mobile number must be 10 characters" })
    }



    else{
        return true
    }
}

registerCustomer=(e)=>{
    
    this.setState({error:'',
    nameerror:'',
    emailerror:'',
    passworderror:'',
    cityerror:'',
    addresserror:'',
    pincodeerror:'',
    mobileerror:''})
   
   
    if(this.valid()){

    e.preventDefault();
    let customer = {c_Name:this.state.name,email:this.state.email,c_City:this.state.city,c_Address:this.state.address,
        c_Pincode:this.state.pincode,c_mobile:this.state.mobile,password:this.state.password};
      console.log('customer =>' + JSON.stringify(customer));

      CustomerService.createCustomer(customer).then(res =>{
        //   this.props.history.push('/login');
          alert=("Form has been submitted");
          window.location.href = "/login";
          
      });
    }
    else{
        
    }
}

changeNameHandler =(event) => {
   this.setState({name:event.target.value});
}

changeEmailHandler=(event) =>{
    this.setState({email:event.target.value});
}

changeCityHandler=(event) =>{
    this.setState({city:event.target.value});
}

changeAddressHandler=(event) =>{
    this.setState({address:event.target.value});
}

changePincodeHandler=(event) =>{
    this.setState({pincode:event.target.value});
}

changeMobileHandler=(event) =>{
    this.setState({mobile:event.target.value});
}

changePasswordHandler=(event) =>{
    this.setState({password:event.target.value});
}

cancel(){
    
    window.location.href = "/login";
}

  render() {
    return (
        <div className='addcustomer'>
            <div className='container'>
            <div className='row'>
             <div className='card col-md-6 offset-md-3 offset-md-3'  style={{marginTop: "60px",marginBottom: "70px"}} >
        <form style={{backgroundColor:"aliceblue"}}>
  
        <h3 className='text-center ' style={{marginTop:"10px"}} >CREATE AN ACCOUNT</h3>
        <p style={{color:'red' ,fontSize:'14px'}}>{this.state.error}</p>
       

        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" name='name' 
            value={this.state.name} onChange={this.changeNameHandler} />
            <p style={{color:'red' ,fontSize:'14px'}}>{this.state.nameerror}</p>
        </div>
       

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" name='email'
            value={this.state.email} onChange={this.changeEmailHandler} />
             <p style={{color:'red' ,fontSize:'14px'}}>{this.state.emailerror}</p>
        </div>

        <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="Enter city"  name='city'
            value={this.state.city} onChange={this.changeCityHandler}/>
             <p style={{color:'red' ,fontSize:'14px'}}>{this.state.cityerror}</p>
        </div>

        <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Enter address" name='address'
            value={this.state.address} onChange={this.changeAddressHandler}/>
             <p style={{color:'red' ,fontSize:'14px'}}>{this.state.addresserror}</p>
        </div>

        <div className="form-group">
            <label>Pincode</label>
            <input type="number" className="form-control" placeholder="Enter pincode" name='pincode'
              value={this.state.pincode} onChange={this.changePincodeHandler}/>
               <p style={{color:'red' ,fontSize:'14px'}}>{this.state.pincodeerror}</p>
        </div>

        <div className="form-group">
            <label>Mobile</label>
            <input type="number" className="form-control" placeholder="Enter mobile number" name='mobile'
             value={this.state.mobile} onChange={this.changeMobileHandler}/>
              <p style={{color:'red' ,fontSize:'14px'}}>{this.state.mobileerror}</p>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name='password'
            value={this.state.password} onChange={this.changePasswordHandler} />
             <p style={{color:'red' ,fontSize:'14px'}}>{this.state.passworderror}</p>
        </div>

        <a  className="btn btn-success " onClick={this.registerCustomer}>Register</a>
        <a className="btn btn-danger" href="login" onClick={this.cancel} style={{marginLeft:"10px"}} >Cancel</a>
        <p className="forgot-password text-right">
            Already registered <a href="login">log in?</a>
        </p>
    </form>
    </div>
    </div>
    </div>
    </div>
    )
  }
}