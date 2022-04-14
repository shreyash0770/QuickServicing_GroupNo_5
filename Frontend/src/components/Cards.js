import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import '../images/Breakdown.png'


export default function Cards() {
  return (
    <div>
            <div className="card-group">
            <div className="card">
    <img className="card-img-top" src= {require('../images/CarS.png')} width="100%" height="150" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Car Servicing</h5>
      <p className="card-text">Choose from a wide assortment of car services from periodic car servicing, car care services, wheel care services, cashless trasaction claims and much more!</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src= {require('../images/BikeS.png')} width="100%" height="150" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Bike Servicing</h5>
      <p className="card-text">We provide bike repair service at your doorstep. Our services include bike servicing, bike washing, bike service, bike general service, bike service at home.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>


  <div className="card">
    <img className="card-img-top" src= {require('../images/Breakdown.png')} width="100%" height="150" alt="Breakdown" />
    <div className="card-body">
      <h5 className="card-title">Breakdown Assistance</h5>
      <p className="card-text">Vehicle breakdown!!! Frustrated and stuck in a middle of nowhere? Got no assistance nearby? Don’t panic. Think of your friend, Garage2Ghar to the rescue.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src= {require('../images/pic.png')} width="60%" height="150" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Pick n Drop Servicing</h5>
      <p className="card-text">Regular maintenance, Spare replacement, Engine works, Custom Mods, Restoration- You name it and we got it. Get your vehicle picked and dropped at your desired location.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  

</div>

    </div>
  )
}
