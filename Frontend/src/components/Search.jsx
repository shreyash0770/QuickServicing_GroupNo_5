import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (

      <div className="row">
      <div className="col-md-6">
         <div className="form-horizontal">
           <div className="input-group">              
             <input id="txtkey" type="number" className="form-control" placeholder="Enter Pincode here" aria-describedby="ddlsearch" />
             <div className="ddl-select input-group-btn">
               <select id="ddlsearch" className="selectpicker form-control" data-style="btn-primary">
               <option value="" disabled selected >Service</option>
                 <option value="Garage">Garage Shop</option>
                 <option value="Puncture">Puncture Shop</option>
                 <option value="Shipment">Shipment Service</option>
               </select>
             </div>
             <span className="input-group-btn">
               <button id="btn-search" className="btn btn-info" type="button">search</button>
             </span>
           </div>
         </div>
       </div>
     </div>





      //  <div className='container' style={{marginTop:'50px'}}>
      //      <form>
      //        <input className='text'></input>  
	    //        <select className=" ">
	    //        <option>Select</option> 
	    //        <option>Car</option> 
	    //        <option>Bike</option> 
	    //        <option>Scooter</option> 
	    //        <option>Cycle</option> 
	    //        <option>Horse</option> 
	    //     </select>
      //     <button className='btn btn-red'>Search</button>
	    
      //      </form>
      //  </div>
    )
  }
}
