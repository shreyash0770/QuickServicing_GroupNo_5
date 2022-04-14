import { Toast } from 'bootstrap';
import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'





export default class CustomerList extends Component {
    constructor(props) {
        
      super(props)
    
      this.state = {
         customers: []
      }
      
      this.editCustomer = this.editCustomer.bind(this);
      this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    

    deleteCustomer(c_Id){
       
        if(window.confirm("do you really want to delete this?"))
        {
               CustomerService.deleteCustomer(c_Id).then(res => {
                this.setState({customers:this.state.customers.filter(customer => customer.c_Id !== c_Id)});
                
            });
            
        }
       
    }

    editCustomer(c_Id){
 
        this.props.history.push(`/updatecust/${c_Id}`);
      // window.open=(`/update-customer/${c_Id}`);
        //window.location.href =(`/update-customer/${c_Id}`);
        
        
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) =>{
            this.setState({customers: res.data});

       });
    }

    

  render() {
    return (
        <div className='customerlist'>
      <div className='container'>
          <h2 className='text-center'>Customers List</h2>

          <a style={{marginRight:'1200px'}} href='/adminpage' className='btn btn-primary'>Back</a>
           
          <div className='row'>
              <table className='table table-striped table-bordered'>
                  <thead>
                      <tr>
                          <th> Name</th>
                          <th> Email</th>
                          <th> Mobile</th>
                          <th> City</th>
                          <th> Address</th>
                          <th>Actions</th>
                      </tr>
                  </thead>

                  <tbody>
                      {
                          this.state.customers.map(
                              (customer) =>
                              <tr key ={customer.c_Id}>
                                  <td>{customer.c_Name}</td>
                                  <td>{customer.email}</td>
                                  <td>{customer.c_mobile}</td>
                                  <td>{customer.c_City}</td>
                                  <td>{customer.c_Address}</td>
                                  <td>
                                      <button  onClick={()=>this.editCustomer(customer.c_Id)} className="btn btn-info" >Update</button>
                                      <button  onClick={()=>this.deleteCustomer(customer.c_Id)} className="btn btn-danger" style={{marginLeft:'10px'}} >Delete</button>
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


