import React, { Component } from 'react'
import ServiceProvidersService from '../services/ServiceProvidersService'
import '../services/css/serviceprovidercard.css'

export default class ServiceProviderCards extends Component {
  constructor(props) {
    
    super(props)
   
  
    this.state = {
      serviceProviders: [],
      searchdata:null,
      noData:false,
      pin:'',
      role:'',
      email:''
      
      
    }
    this.serachpin = this.serachpin.bind(this);
    this.serachrole = this.serachrole.bind(this);
  }
  
  componentDidMount(){


    ServiceProvidersService.getServiceProviders().then((res) =>{
        this.setState({serviceProviders: res.data});

   });
}

vehicalRegistration(s_Id){
  console.warn(s_Id)
  this.props.history.push(`/booking/${s_Id}`)
  localStorage.setItem("id",JSON.stringify(s_Id))

  
}


updatecustomer(){

  
  let cust = JSON.parse(localStorage.getItem('user-info'))
  this.props.history.push(`/update-customer/${cust.c_Id}`);
  

}

check(){
  this.props.history.push('/checkstatus');
}

serachpin=(event)=>{
  this.setState({pin:event.target.value});
}

serachrole=(event)=>{
  this.setState({role:event.target.value});
}

serach=(e)=>{
  e.preventDefault();
  let values= {s_Pincode:this.state.pin,s_Role:this.state.role}
  console.warn(values);
  console.warn(values.s_Pincode);
  console.warn(values.s_Role);
 


  fetch("http://localhost:8080/serviceProviders/"+values.s_Pincode+"/"+values.s_Role).then((data)=>{
    data.json().then((resp)=>{
       console.warn("resp",resp)
      
       console.warn(resp[0].value)
      
      if(resp.length>0)
      {
        this.setState({searchdata:resp})
      }
      else
      {
        this.setState({noData:true,searchdata:null})
      }
    })
  })
}



  render() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    return (



      <div>
        <diV>
        <button style={{backgroundColor:'orange'}} onClick={()=>this.updatecustomer()}>My Profile</button>
         <button style={{marginLeft:'10px'}} onClick={()=>this.check()} >Status</button>
        </diV>
         <h6>Welcome:{user.c_Name}</h6>
         <h1 className='text-center' style={{backgroundColor:'orange'}}> Service Providers List</h1>
        

         <div className="row" style={{marginLeft:'400px'}}>
      <div className="col-md-6" >
         <div className="form-horizontal" >
           <div className="input-group">              
             <input id="txtkey" type="number" value={this.state.pin} onChange={this.serachpin} className="form-control" placeholder="Enter Pincode here" aria-describedby="ddlsearch" />
             <div className="ddl-select input-group-btn">
               <select id="ddlsearch" className="selectpicker form-control" data-style="btn-primary" value={this.state.role} onChange={this.serachrole}>
               <option value="" disabled selected >Services</option>
                 <option value="Garage">Garage</option>
                 <option value="Puncture">Puncture</option>
                 <option value="Shipment">Shipment</option>
               </select>
             </div>
             <span className="input-group-btn">
               <button id="btn-search" onClick={this.serach} className="btn btn-info" type="button">search</button>
               
             </span>
           </div>
         </div>
       </div>
      
     </div>



      
         <div className='serviceproviderss'> 
         <diV>
         {
           this.state.searchdata?
       this.state.searchdata.map((serviceProvider) =>
        <div className='cards'>
           
             
          <div>
           <h3 className='serviceNames'>{serviceProvider.s_Name}</h3>  
          </div>
          
          <div className='serviceEmail'>Email:{serviceProvider.email}</div>
          <div className='servicePhone'>Phone:{serviceProvider.s_Phone}</div>
          <div className='serviceCity'>City:{serviceProvider.s_City}</div>
          <div className='serviceAddress'>Address:{serviceProvider.s_Address}</div>

          <div>
             <a className='btn btn-success' href="vehicle" style={{marginTop:'10px',width:'50%'}} onClick={()=>this.vehicalRegistration(serviceProvider.s_Id)}  >Book</a>
          </div>
         
       

      
  
        </div>  
            

          
       
       )
       :""}
       </diV>
     </div>
  
     </div>
          
      
        )
    
  }
}
