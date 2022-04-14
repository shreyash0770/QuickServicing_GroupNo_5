import React, { Component } from 'react'
import ServiceBookingsService from '../services/ServiceBookingsService';


export default class CheckRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bookings:[],
         id:'',
         states:'Accept',
         bId:''
      }
      this.Accept =this.Accept.bind(this);
    }

    componentDidMount(){

        let custDetails = JSON.parse(localStorage.getItem('user-info'))
        this.setState({id:custDetails.c_Id});

        ServiceBookingsService.getCustById(custDetails.c_Id).then((res) =>{
            this.setState({bookings: res.data});

       });
    }


  

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



    

    changeHandleder = (event) =>  {
        this.setState({states:event.target.value});
}
    

    


  render() {
    return (
        <div className='customerlist'>
        <div className='container'>
            <h2 className='text-center'> Check Status</h2>
  
            <a style={{marginRight:'1200px'}} href='/cards' className='btn btn-primary'>Back</a>
             
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                      
                        <th > Status </th>
                       
                           
                        </tr>
                    </thead>
  
                    <tbody>
                        {
                           this.state.bookings?
                           
                            this.state.bookings.map(
                                (booking) =>
                                <tr key ={booking.bId}>
                                                                
                                    <td>{booking.status}</td>
                                                                
                                </tr>
                            )
                           
                            :""
                                                                                                    
                        }
                       
                    </tbody>
  
                </table>
  
            </div>
        </div>
        </div>
    )
  }
}
