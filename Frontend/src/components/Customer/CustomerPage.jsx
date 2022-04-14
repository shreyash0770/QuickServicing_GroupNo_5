import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import ServiceProviderService from '../services/ServiceProvidersService';




export default class GetAllProvidersT  extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         ServiceProvider : []
      }
    }

    componentDidMount(){
            ServiceProviderService.getServiceProviders().then((res)=>{
                this.setState({ServiceProvider : res.data});
            });
    }



  render() {
    return (
      <div className='container'>
               <h2 className='text-center'>These Are the Service Providers In Your Area</h2>
               <div className="row">
                       <table className='table table-striped table-bordered '>
                               <thead>
                                       <tr>
                                               <th>Name Of Shop</th>
                                               <th>Address</th>
                                               <th>City</th>
                                               <th>Phone No</th>
                                               <th>Go for it</th>
                                       </tr>
                               </thead>
                               <tbody>
                               {
                                        this.state.ServiceProvider.map(
                                                ServiceProvider =>
                                                <tr key={ServiceProvider.s_Id}>
                                                        <td >{ServiceProvider.s_Name}</td>
                                                        <td >{ServiceProvider.s_Address}</td>
                                                        <td >{ServiceProvider.s_City}</td>
                                                        <td > {ServiceProvider.s_Phone}</td>
                                                        <td><a href="/vehicle" className="btn btn-warning">Book Now</a></td>
                                                </tr>
                                        )
                                }
                               </tbody>

                       </table>
               </div>
                
      </div>
      )}}