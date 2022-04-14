import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import  {params } from 'react-router-dom';


export default class CheckCustomer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            
          id: this.props.match.params.id,
          name:'',
          email:'',
          city:'',
          address:'',
          pincode:'',
          mobile:'',
          password:''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler= this.changeEmailHandler.bind(this);
        this.changeCityHandler= this.changeCityHandler.bind(this);
        this.changeAddressHandler= this.changeAddressHandler.bind(this);
        this.changePincodeHandler= this.changePincodeHandler.bind(this);
        this.changeMobileHandler= this.changeMobileHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.updateCustomer= this.updateCustomer.bind(this);
      
      
        
      }

      componentDidMount(){
          CustomerService.getCustomerById(this.state.id).then((res)=>{
              let customer = res.data;
              this.setState({name:customer.c_Name,
                  email:customer.email,
                  city:customer.c_City,
                  address:customer.c_Address,
                  pincode:customer.c_Pincode,
                  mobile:customer.c_mobile,
                  password:customer.c_Password
              });
          });
      }
      
      updateCustomer=(e)=>{
          e.preventDefault();
          let customer = {c_Name:this.state.name,email:this.state.email,c_City:this.state.city,c_Address:this.state.address,
              c_Pincode:this.state.pincode,c_mobile:this.state.mobile,c_Password:this.state.password};
            console.log('customer =>' + JSON.stringify(customer));

            CustomerService.updateCustomer(customer,this.state.id).then(res =>{
                
                window.location.href = "/cards";
            });
      
           
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
          this.props.history.push('/checkreq');
      }
      
        render() {
          return (
              <div className='container'>
                  <div className='row'>
                      <div className='card col-md-6 offset-md-3 offset-md-3'  style={{marginTop: "60px",marginBottom: "70px"}} >
              <form style={{backgroundColor:"aliceblue"}}>
        
              <h3 className='text-center ' style={{marginTop:"10px"}} >Customer Details</h3>
      
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Enter name" name='name' 
                  value={this.state.name} onChange={this.changeNameHandler} disabled />
              </div>
      
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" name='email'
                  value={this.state.email} onChange={this.changeEmailHandler} disabled />
              </div>
      
              <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" placeholder="Enter city"  name='city'
                  value={this.state.city} onChange={this.changeCityHandler} disabled/>
              </div>
      
              <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" placeholder="Enter address" name='address'
                  value={this.state.address} onChange={this.changeAddressHandler} disabled/>
              </div>
      
              <div className="form-group">
                  <label>Pincode</label>
                  <input type="number" className="form-control" placeholder="Enter pincode" name='pincode'
                    value={this.state.pincode} onChange={this.changePincodeHandler} disabled/>
              </div>
      
              <div className="form-group">
                  <label>Mobile</label>
                  <input type="number" className="form-control" placeholder="Enter mobile number" name='mobile'
                   value={this.state.mobile} onChange={this.changeMobileHandler} disabled/>
              </div>
      
          
            
              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px",marginBottom:"20px"}} >Cancel</button>
              
          </form>
          </div>
          </div>
          </div>
          )
  }
}
