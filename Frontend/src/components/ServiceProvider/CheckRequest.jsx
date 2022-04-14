import React, { Component } from 'react'
import ServiceBookingsService from '../services/ServiceBookingsService';


export default class CheckRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bookings:[],
         id:'',
         states:'Accepted',
         bId:''
      }
      this.Accept =this.Accept.bind(this);
    }

    componentDidMount(){

        let spdetails = JSON.parse(localStorage.getItem('user-info'))
        this.setState({id:spdetails.s_Id});

        ServiceBookingsService.getServiceProvidersById(spdetails.s_Id).then((res) =>{
            this.setState({bookings: res.data});

       });
    }


    CustomerDetails(customerId){

        this.props.history.push(`/Check-customer/${customerId}`);

    }

//     updateServiceProviders = (e) =>{
//         e.preventDefault();

//         let serviceProvider = {s_Name : this.state.name, email: this.state.email, s_Address: this.state.address, 
//                             s_Phone : this.state.phone, s_Pincode : this.state.Pincode, s_City : this.state.City,
//                             password: this.state.Password, s_Role: this.state.Role};
//             console.log('serviceProvider => ' +JSON.stringify(serviceProvider));

//             ServiceProvidersService.updateServiceProviders(serviceProvider,this.state.id).then(res =>{
//                     window.location.href ='/serviceProviderPage'; 
//             });
// }

    Accept = (e) =>{
      
        if(window.confirm("do you really want to Accept this?"))
       {
        let booking = {status : this.state.states};
           
        console.log('booking =>' + JSON.stringify(booking));
        

          ServiceBookingsService.updateBookings(booking,e).then(res =>{
                 
              window.location.href = "/checkreq";
          });
        }
    }

    Reject(bId){
       
        if(window.confirm("do you really want to Reject this?"))
        {
               ServiceBookingsService.rejectBooking(bId).then(res => {
                this.setState({bookings:this.state.bookings.filter(booking => booking.bId !== bId)});
                
            });
            
        }
       
    }

    

    changeHandleder = (event) =>  {
        this.setState({states:event.target.value});
}
    

    


  render() {
    return (
        <div className='customerlist'>
        <div className='container'>
            <h2 className='text-center'>Requests</h2>
  
            <a style={{marginRight:'1200px'}} href='/serviceProviderPage' className='btn btn-primary'>Back</a>
             
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th > Customer Id</th>
                            <th> Vehicle Type</th>
                            <th> Vehicle Brand</th>
                            <th> Vehicle Number </th>
                            <th> Vehicle KM</th>
                            <th> Pickup</th>
                            <th> Booking Date</th>
                            <th> Servicing</th>
                            <th> Suggestions</th>
                            <th>check</th>
                            <th>Action</th>
                        </tr>
                    </thead>
  
                    <tbody>
                        {
                            this.state.bookings.map(
                                (booking) =>
                                <tr key ={booking.bId}>
                                    <td>{booking.customerId}</td>
                                    <td>{booking.vtype}</td>
                                    <td>{booking.vBrand}</td>
                                    <td>{booking.vNumber}</td>
                                    <td>{booking.vKm}</td>
                                    <td>{booking.pickup_drop}</td>
                                    <td>{booking.bookingDate}</td>
                                    <td>{booking.service}</td>
                                    <td>{booking.extra_service}</td>
                                    <td>
                                        <button  onClick={()=>this.CustomerDetails(booking.customerId)} className="btn btn-info"  >Details</button>
                                    </td>
                                    <td>
                                        <button  onClick={()=>this.Accept(booking.bId)} onChange={this.changeHandleder}  value={this.state.states} className="btn btn-success" >Accept</button>
                                        <button  onClick={()=>this.Reject(booking.bId)} className="btn btn-danger" style={{marginTop:'10px'}} >Reject</button>
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
