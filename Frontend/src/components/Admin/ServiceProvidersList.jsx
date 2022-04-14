import { Toast } from 'bootstrap';
import React, { Component } from 'react'
import ServiceProvidersService from '../services/ServiceProvidersService'




export default class ServiceProvidersList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        serviceProviders: []
      }
      
      // this.editCustomer = this.editCustomer.bind(this);
      this.deleteServiceProvider = this.deleteServiceProvider.bind(this);
      this.editServiceProvider = this.editServiceProvider.bind(this);
    }

    deleteServiceProvider(s_Id){
       
        if(window.confirm("do you really want to delete this?"))
        {
               ServiceProvidersService.deleteServiceProviders(s_Id).then(res => {
                this.setState({serviceProviders:this.state.serviceProviders.filter(serviceProvider => serviceProvider.s_Id !== s_Id)});
                
            });
            
        }
       
    }

     editServiceProvider(s_Id){
 
         this.props.history.push(`/update-ServiceProvider/${s_Id}`);
        
     }

    componentDidMount(){
        ServiceProvidersService.getServiceProviders().then((res) =>{
            this.setState({serviceProviders: res.data});

       });
    }

 

    

  render() {
    return (
        <div className='providerlist'>
      <div className='container'>
      
          <h2 className='text-center'>Service Providers List</h2>
          

          <a style={{marginRight:'1200px'}} href='/adminpage' className='btn btn-primary'>Back</a>
           
          <div className='row'>
              <table className='table table-striped table-bordered'>
                  <thead>
                      <tr>
                          <th> Name</th>
                          <th> Email</th>
                          <th> Phone</th>
                          <th> City</th>
                          <th> Address</th>
                          
                        
                          <th>Actions</th>
                      </tr>
                  </thead>

                  <tbody>
                      {
                          this.state.serviceProviders.map(
                              (serviceProvider) =>
                              <tr key ={serviceProvider.s_Id}>
                                  <td>{serviceProvider.s_Name}</td>
                                  <td>{serviceProvider.email}</td>
                                  <td>{serviceProvider.s_Phone}</td>
                                  <td>{serviceProvider.s_City}</td>
                                  <td>{serviceProvider.s_Address}</td>
                               
                                
                                  <td>
                                      {/* <button  onClick={()=>this.editServiceProvider(serviceProvider.s_Id)} className="btn btn-info" >Update</button> */}
                                      <button  onClick={()=>this.deleteServiceProvider(serviceProvider.s_Id)} className="btn btn-danger" style={{marginLeft:'10px'}} >Delete</button>
                                  </td>

                              </tr>
                          )
                      }
                  
                  </tbody>

              </table>

          </div>
      </div>
      </div>
    )
  }
}
