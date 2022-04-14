import React, { Component } from 'react'
import ServiceBookingsService from '../services/ServiceBookingsService';
import Moment from 'moment';


export default class ServiceBooking extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    

      vType:'',
      vBrand:'',
      vName:'',
      vNumber:'',
      vKm:'',
      service:'',
      bookingdate:'',
      pickdrop:'',
      driveIn:'',
      extraService:'',
      customerId:'',
      spId:'',
      stats:'pending'
       
    }
    this.changeVehicleTypeHandler = this.changeVehicleTypeHandler.bind(this);
    this.changeVehicleBrandHandler =this.changeVehicleBrandHandler.bind(this);
    this.changeVehicleNameHandler = this.changeVehicleNameHandler.bind(this);
    this.changeVehicleNumberHandler= this.changeVehicleNumberHandler.bind(this);
    this.changeVehicleKmHandler= this.changeVehicleKmHandler.bind(this);
    this.changeDateHandler= this.changeDateHandler.bind(this);
    this.changepickdropHandler= this.changepickdropHandler.bind(this);
    this.changeDriveInHandler= this.changeDriveInHandler.bind(this);
    this.changeExtraServiceHandler= this.changeExtraServiceHandler.bind(this);
    this.changeCustomerIdHandler= this.changeCustomerIdHandler.bind(this);
    this.changespIdHandler= this.changespIdHandler.bind(this);
    this.saveBookings= this.saveBookings.bind(this);
  }

  saveBookings=(e)=>{
    e.preventDefault();

    let booking = {vtype : this.state.vType, vBrand: this.state.vBrand, vName: this.state.vName, 
      vNumber : this.state.vNumber, vKm : this.state.vKm, bookingDate : this.state.bookingdate,
       drive_in: this.state.driveIn,pickup_drop: this.state.pickdrop,extra_service:this.state.extraService,
      customerId: this.state.customerId, sproviderId: this.state.spId,service:this.state.service,status:this.state.stats };
        console.log('booking => ' +JSON.stringify(booking));

        ServiceBookingsService.createBookings(booking).then(res =>{
                window.location.href ='/cards'; 
               
        });

  }

  changeVehicleTypeHandler =(event) =>{
    this.setState({vType:event.target.value});
  }

  changeVehicleBrandHandler=(event) =>{
    this.setState({vBrand:event.target.value});
  }

  changeVehicleNameHandler=(event)=>{
    this.setState({vName:event.target.value});
  }

  changeVehicleNumberHandler=(event)=>{
    this.setState({vNumber:event.target.value});
  }

  changeVehicleKmHandler=(event)=>{
    this.setState({vKm:event.target.value});
  }

  changeDateHandler=(event)=>{
    this.setState({bookingdate:event.target.value});
  }

  changepickdropHandler=(event)=>{
    this.setState({pickdrop:event.target.value});
  }

  changeDriveInHandler=(event)=>{
    this.setState({driveIn:event.target.value});
  }

  changeExtraServiceHandler=(event)=>{
    this.setState({extraService:event.target.value});
  }

  changeCustomerIdHandler=(event)=>{
    let customerDetails = JSON.parse(localStorage.getItem('user-info'))
    this.setState({customerId:customerDetails.c_Id});
  }

  changespIdHandler=(event)=>{
    let servicepID = JSON.parse(localStorage.getItem('id'))
    this.setState({spId:servicepID});
  }

  changeServiceHandler=(event)=>{
    this.setState({service:event.target.value});
  }

  componentDidMount=()=>{
    let customerDetails = JSON.parse(localStorage.getItem('user-info'))
    this.setState({customerId:customerDetails.c_Id});

    let servicepID = JSON.parse(localStorage.getItem('id'))
    this.setState({spId:servicepID});
    
  }

 



  render() {
    return (
      <div>
      <div className="container p-5 vRegPage">
              <form className="row g-3" >
              <div className="col-md-6">
                          <label  className="form-label">Customer Id</label>
                          <input className="form-control" type='number' value={this.state.customerId} onChange={this.changeCustomerIdHandler}  disabled />
                                     
                      </div>
                
           <div className="col-md-6">
                                      <label  className="form-label">Service Provider Id</label>
                                      <input className="form-control" type='number'  value={localStorage.id} onChange={this.changespIdHandler} disabled />                    
                      </div>




                      <div className="col-md-6">
                                      <label  className="form-label">Choose Vehicle Type</label>
                                      <input className="form-control" list="datalistOptions" placeholder="Select Vehicle Type " 
                                                      value={this.state.vType} onChange={this.changeVehicleTypeHandler}/>
                                      <datalist id="datalistOptions">
                                              <option value="Bike"/>
                                              <option value="Car"/>
                                              <option value=" Scooty"/>
                                              <option value="Bicycle"/>
                                      </datalist>
                      </div>
                      <div className="col-md-6">
                                      <label  className="form-label">Name Of Brand</label>
                              <div className="input-group has-validation">
                                      <input className="form-control" list="datalistOptions1"placeholder="Select Vehicle Brand " 
                                                      value={this.state.vBrand} onChange={this.changeVehicleBrandHandler}/>
                                      <datalist id="datalistOptions1">
                                              <option value="Honda"/>
                                              <option value="Hero"/>
                                              <option value=" Bajaj"/>
                                              <option value="Suzuki"/>
                                              <option value="mahindra"/>
                                              <option value="UM Motorcycles"/>
                                              <option value="KTM"/>
                                              <option value="Yamaha"/>
                                              <option value="kawasaki"/>
                                              <option value="Royal Enfield"/>
                                              <option value="Piaggio"/>
                                              <option value="TVS"/>
                                              <option value="OLA"/>
                                      </datalist>
                              </div>
                                      
                      </div>
                      <div className="col-md-6">
                                      <label  className="form-label">Vehicle  Name</label>
                              <div className="input-group has-validation">
                                      <input type="text" className="form-control"  aria-describedby="inputGroupPrepend"
                                              placeholder="Enter Your Vehicle Name" value={this.state.vName} onChange={this.changeVehicleNameHandler} required/>
                                     
                              </div>          
                      </div>
                      <div className="col-md-6">
                                      <label  className="form-label">Vehicle Number</label>
                              <div className="input-group has-validation">
                                      <input type="number" className="form-control"
                                              placeholder="Enter vehicle number " value={this.state.vNumber} onChange={this.changeVehicleNumberHandler} required/>
                                      
                              </div>          
                      </div>
                      
                     <div className="col-md-6">
                                      <label  className="form-label">Vehicle Kilometer</label>
                              <div className="input-group has-validation">
                                      <input type="number" className="form-control"  ar
                                              placeholder="Enter Vehicle Km " value={this.state.vKm} onChange={this.changeVehicleKmHandler} required/>
                                       
                              </div>          
                      </div>

                      <div className="col-md-6">
                                      <label  className="form-label" >Booking Date</label>
                                      <input className="form-control" value={this.state.bookingdate} onChange={this.changeDateHandler}  type="text" placeholder='DD/MM/YYYY' />
                                     
                     </div>


                      <div className="col-md-6">
                                      <label  className="form-label">you will drop your vehicle at service station? </label>
                                      <input className="form-control"  value={this.state.driveIn} onChange={this.changeDriveInHandler}  list="drivein" placeholder=" Drive In " />
                                      <datalist id="drivein">
                                              <option value="Yes"/>
                                              <option value="No"/>
                                             
                                      </datalist>
                      </div>

                      <div className="col-md-6">
                                      <label  className="form-label">Do you Want our Pick and Drop Service</label>
                                      <input className="form-control" value={this.state.pickdrop} onChange={this.changepickdropHandler}   list="pickdrops" placeholder="Pick and Drop Service " />
                                      <datalist id="pickdrops">
                                              <option value="Yes"/>
                                              <option value="No"/>
                                             
                                      </datalist>
                      </div>

                      <div className="col-md-6">
                                      <label  className="form-label">Service</label>
                                      <input className="form-control" list="datalistOptions2" placeholder="Select Service" 
                                                      value={this.state.service} onChange={this.changeServiceHandler}/>
                                      <datalist id="datalistOptions2">
                                              <option value="Full Servicing"/>
                                              <option value="Reparing"/>
                                              <option value=" Washing"/>
                                              <option value="other"/>
                                      </datalist>
                      </div>

                      <div className="col-md-6">
                                      <label  className="form-label">Any Extra Service?</label>
                                      <input className="form-control" type='text' value={this.state.extraService} onChange={this.changeExtraServiceHandler} placeholder="any suggetions? " />
                                     
                      </div>

                      <div className="col-12">
                              <button className="btn btn-warning" type="submit"onClick={this.saveBookings} >Book</button>
                      </div> 
              </form>
      </div>
</div>
    )
  }
}
