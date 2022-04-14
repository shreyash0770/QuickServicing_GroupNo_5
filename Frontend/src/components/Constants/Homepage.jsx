import React, { Component } from 'react'
// import '../images'

export default class Homepage extends Component {

constructor(props) {
    super(props);
    
    this.state={

    }
}

// {require('../images/car2.jpg')}





  render() {
    return (
      <div>

        {/* carousel */}
        <div className='divider py-1 bg-dark'></div>
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
    <div className="carousel-item active" data-interval="100">
      <img src={require('../../images/a3.jpg')} height="600" width="100%"/>
    </div>
    <div className="carousel-item" data-interval="200">
      <img src={require('../../images/car1.jpg')} height="500" width="100%"/>
    </div>
    <div className="carousel-item">
      <img src={require('../../images/car2.jpg')} height="500" width="100%"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<h1 className="text-center font-weight-bold bg-warning text-white py-3"> About Quick Service </h1>


{/* cards */}
<div className='card-group' style={{padding:"20px"}}>
<div className="card border-0" style={{width: "18rem" , padding:"20px", }}>
  <img src={require('../../images/b1.png')} className="card-img-top" alt="..." height={300} width={150}/>
  <div className="card-body">
    <h3 className='text-center'>Trust</h3>
    <p className="card-text">We aspire to provide the best for your vehicle to keep it running with and build trust which keeps us running. We believe in a transparent process providing </p>
  </div>
</div>
<div className="card border-0" style={{width: "18rem" , padding:"20px"}}>
  <img src={require('../../images/b2.png')} className="card-img-top" alt="..." height={300} width={150}/>
  <div className="card-body">
  <h3 className='text-center'>Response</h3>
    <p className="card-text">From picking up the vehicle from your doorstep till dropping it back with utmost care, we take the complete responsibility of your beloved vehicle.</p>
  </div>
</div>
<div className="card border-0" style={{width: "18rem" , padding:"20px"}}>
  <img src={require('../../images/b3.png')} className="card-img-top" alt="..." height={300} width={150}/>
  <div className="card-body">
  <h3 className='text-center'>Quality</h3>
    <p className="card-text">Top-notch professional mechanics with years of experience looking after your vehicle in a fully equipped and dedicated workshop. Use of 100% genuine spare parts..</p>
  </div>
</div>
<div className="card border-0" style={{width: "18rem" , padding:"20px"}}>
  <img src={require('../../images/b4.png')} className="card-img-top" alt="..." height={300} width={150}/>
  <div className="card-body">
  <h3  className='text-center'>Convinience</h3>
    <p className="card-text">Simply select your desired service location & delivery time, be it your office, a restaurant, your home or a movie theatre..</p>
  </div>
</div>
</div>             
 
<div className="divider py-2 bg-primary"></div>

      </div>
    )
  }
}
