import React, { Component } from 'react'
import ServiceProvidersService from '../services/ServiceProvidersService';



export default class ServiceProviderSignUp extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
        name : '',
        email: '',
        address: '',
        phone: '',
        Pincode: '',
        City: '',
        Password: '',
        Role:'',
        Picture:''

    
        // formErrors: {email: '', Password: ''},
        // emailValid: false,
        // passwordValid: false,
        // formValid: false

      }
      this.changeNameHandler = this.changeNameHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this);
      this.changePhoneHandler = this.changePhoneHandler.bind(this);
      this.changePincodeHandler = this.changePincodeHandler.bind(this);
      this.changeCityHandler = this.changeCityHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
      this.changeRoleHandler = this.changeRoleHandler.bind(this);
      this.changePictureHandler = this.changePictureHandler.bind(this);
      this.saveServiceProvider = this.saveServiceProvider.bind(this);
    }

//     saveServiceProvider = (e) =>{
//            e.preventDefault();
               
        
//         let serviceProvider = {s_Name : this.state.name, s_Email: this.state.email, s_Address: this.state.address, 
//                             s_Phone : this.state.phone, s_Pincode : this.state.Pincode, s_City : this.state.City,
//                             s_Password: this.state.Password, s_Role: this.state.Role,file:this.state.Picture};
//             console.log('serviceProvider => ' +JSON.stringify(serviceProvider));

//             axios({method: 'post',
//                    url: 'http://localhost:8080/serviceProviders',
//                    data: serviceProvider,
//                    })  


        //     ServiceProvidersService.createServiceProviders(serviceProvider).then(res =>{
        //             window.location.href ='/login'; 
        //     });
//}







    
    saveServiceProvider = (e) =>{

            e.preventDefault();

            let serviceProvider = {s_Name : this.state.name, email: this.state.email, s_Address: this.state.address, 
                                s_Phone : this.state.phone, s_Pincode : this.state.Pincode, s_City : this.state.City,
                                password: this.state.Password, s_Role: this.state.Role,s_Picture:this.state.Picture};
                console.log('serviceProvider => ' +JSON.stringify(serviceProvider));

                ServiceProvidersService.createServiceProviders(serviceProvider).then(res =>{
                        window.location.href ='/login'; 
                });
            }
      

    changeNameHandler =(event) => {
        this.setState({name:event.target.value});
     }
        changeEmailHandler = (event) =>  {
        this.setState({email:event.target.value});
        }
        changeAddressHandler = (event) =>  {
                this.setState({address:event.target.value});
        }
        changePhoneHandler = (event) =>  {
                this.setState({phone:event.target.value});
        }
        changePincodeHandler = (event) =>  {
                this.setState({Pincode:event.target.value});
        }
        changeCityHandler = (event) =>  {
                this.setState({City:event.target.value});
        }
        changePasswordHandler = (event) =>  {
                this.setState({Password:event.target.value});
        }
        changeRoleHandler = (event) =>  {
                this.setState({Role:event.target.value});
        }
        changePictureHandler = (event) =>  {
                
                this.setState({Picture:event.target.value});
                    
                //     event.preventDefault();
                //         this.setState({
                //                 Picture: event.target.files[0]
                //         });
                //         const formData = new FormData();
                //         formData.append('file', this.state.Picture);                
        
        }


  render() {
    return (
                <div>    
                    <h3>Registration Page</h3>            
                    <div className="container p-5 oooo">
                                <form className="row g-3 needs-validation"  >
                                {/* encType='multipart/form-data' */}
                                        <div className="col-md-4">
                                                <label  className="form-label">Name Of Shop</label>
                                                <div className="input-group has-validation">
                                                                
                                                        <input type="text" className="form-control" id=""  aria-describedby="inputGroupPrepend"
                                                        placeholder="Name of Shop" value={this.state.name} onChange={this.changeNameHandler} required/>
                                                        <div className="invalid-feedback"> Please choose a username.</div>
                                                      
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                                <label  className="form-label">Enter Email Id</label>
                                                <div className="input-group has-validation" required>
                                        
                                                <input type="email" className="form-control"  id="" aria-describedby="inputGroupPrepend" placeholder="Email Address" 
                                                                        value={this.state.email} onChange={this.changeEmailHandler}  />
                                                
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                                <label  className="form-label">Enter Address</label>
                                                <div  className="input-group has-validation">
                                        
                                                <input type="text" className="form-control"  id="" aria-describedby="inputGroupPrepend" placeholder="Full Address" 
                                                                value={this.state.address} onChange={this.changeAddressHandler}required/>
                                               
                                        </div>
                                        </div>
                                        <div className="col-md-4">
                                                <label  className="form-label">Enter City</label>
                                                <div  className="input-group has-validation">
                                        
                                                <input type="text" className="form-control"  id="" aria-describedby="inputGroupPrepend" placeholder="Enter city " 
                                                                value={this.state.City} onChange={this.changeCityHandler}required/>
                                                
                                        </div>
                                        </div>
                                        <div className="col-md-4">
                                                <label  className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationCustom05" placeholder="Enter pincode "
                                                                value={this.state.Pincode} onChange={this.changePincodeHandler} required/>
                                                 
                                        </div>
                                        <div className="col-md-4">
                                                <label  className="form-label">Enter Phone No</label>
                                                <div  className="input-group has-validation">
                                        
                                                <input type="text" className="form-control"  id="" aria-describedby="inputGroupPrepend" placeholder="Enter Phone " 
                                                                value={this.state.phone} onChange={this.changePhoneHandler}required/>
                                                
                                        </div>
                                        </div>

                                        <div className="col-md-4">
                                        <label  className="form-label">Choose Service Type </label>
                                                <input className="form-control" list="datalistOptions5"  id="" placeholder="Select One of the following " 
                                                                value={this.state.Role} onChange={this.changeRoleHandler}/>
                                                <datalist id="datalistOptions5">
                                                <option value="Services" disabled selected/>
                                                <option value="Garage"/>
                                                <option value="Puncture"/>
                                                <option value="Shipment"/>
                                                
                                                </datalist>
                                                </div>
                                                {/* </div>   */}
                                                {/* <div className="col-md-8">
                                                        <label  className="form-label">Choose Picture of Your Shop </label>
                                                        <input className="form-control"  type="file" id="formFile" name='file'
                                                                onChange={this.changePictureHandler}/>
                                                </div>   */}
                                                
                                                <div className="col">
                                                <label  className="form-label">Enter Strong Password</label>
                                                <div  className="input-group has-validation">
                                        
                                                <input type="password" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Enter Password " 
                                                                value={this.state.Password} onChange={this.changePasswordHandler}required/>
                                            
                                                        </div>
                                                        </div>  
                                                <div className="col-12">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  value="" id="invalidCheck" required/>
                                                <label className="form-check-label">
                                                     Agree to <a href='t'>   terms and conditions</a>
                                                     
                                                </label>
                                                <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                </div>
                                                </div>
                                                </div>  
                                                <div className="col-12">
                                                <button className="btn btn-primary" type="submit"onClick={this.saveServiceProvider} >Register Yourself</button>
                                                 </div>  
                                                

                                                
                                </form>
                        </div>

                {/* Main Div */}
        </div>
        
      
      )
  }
}