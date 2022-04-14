import React, { Component } from 'react'


function AdminPage () {


    return (
      <div className='adminpage'>
       
       
       <div className='container' style={{marginTop:'50px',marginLeft:'50px'}}>
       <div className="cardname" style={{width:'18rem'}}>
       <img className="card-img-top overlay overlayFade" src="./images/Customerimg.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">Customers</h5>
       <p className="card-text">Get all details of all customers</p>
       <a href="/customers" className="btn btn-primary">Customer Details</a>
       </div>
       </div>
       </div>

       <div className='' style={{marginTop:'50px',marginLeft:'400px'}}>
       <div className="cardname" style={{width:''}}>
       <img className="card-img-top overlay overlayFade" src="./images/g1.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">Service Providers</h5>
       <p className="card-text">Get all details of Service Providers</p>
       <a href="/ServiceProviders" className="btn btn-primary">Service Providers Details</a>
       </div>
       </div>
       </div>

       <div className='' style={{marginTop:'50px',marginLeft:'800px'}}>
       <div className="cardname" style={{width:''}}>
       <img className="card-img-top overlay overlayFade" src="./images/feedback.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">Custmor Feedback</h5>
       <p className="card-text">Cheack Feedback of all customers</p>
       <a href="feedback" className="btn btn-primary">Feedback</a>
       </div>
       </div>
       </div>

      </div>
    )
  }


export default AdminPage;