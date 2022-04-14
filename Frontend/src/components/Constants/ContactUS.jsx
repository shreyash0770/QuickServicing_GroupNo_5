import React, { Component } from 'react'
import background from '../../images/c.jpg'
import FeedbackService from '../services/FeedbackService';
class ContactUS extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            
            f_name :'',
            f_email:'',
            f_mobile:'',
            f_message:''


        }
        this.saveFeedback = this.saveFeedback.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMessageHandler=this.changeMessageHandler.bind(this);
    }
    
    saveFeedback=(e)=>{
      e.preventDefault();
      let feedback={
        f_name:this.state.f_name,f_email:this.state.f_email,f_mobile:this.state.f_mobile,f_message:this.state.f_message
      };
      console.log('feedback =>'+JSON.stringify(feedback));

      FeedbackService.createFeedback(feedback).then(res=>{
        window.location.href ='/';

      });



    }
    changeNameHandler = (event)=>{
      this.setState({f_name:event.target.value});
    };


    changeEmailHandler = (event)=>{
      this.setState({f_email:event.target.value});
    };
    changeMobileHandler= (event)=>{
      this.setState({f_mobile:event.target.value});
    };
    changeMessageHandler = (event)=>{
      this.setState({f_message:event.target.value});
    };



  render() {
    return (

      <div style={{ backgroundImage: `url(${background})` }}>
          <div className="divider py-2 bg-dark"></div>
  
          <br />
          <br />
          <div className='' style={{marginTop:"20"}}>
                                <div className='row'>
                                        <div className='card col-md-6 offset-md-3 '>
                                               <div className="Card-body">
      
          <h2 className='text-center text-danger'> <b>Get In Touch</b></h2>
          <h3 className='text-center' > <i>We want to here form you !</i></h3>

          <form >
          <div className="divider py-2 bg-white"></div>
          <div className="form-group ">
            <label ><b>Name</b></label>
            <div className="col-sm-12">
            <input type="name" className="form-control" id="exampleInputName" placeholder="Enter Name" 
             value={this.state.f_name} onChange={this.changeNameHandler}/>
            </div>
          </div>
          <div className="divider py-2 bg-white"></div>
          <div className="form-group">
            <label ><b>Email address</b></label>
            <div className="col-sm-12">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            value={this.state.f_email} onChange={this.changeEmailHandler}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div className="divider py-1 bg-white"></div>
          <div className="form-group">
            <label ><b>Mobile</b> </label>
            <div className="col-sm-12">
            <input type="tel" className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile"
            value={this.state.f_mobile} onChange={this.changeMobileHandler}/>
            <small id="mobileHelp" className="form-text text-muted">We'll never share your mobile with anyone else.</small>
          </div></div>
          <div className="divider py-1 bg-white"></div>
            <div className="form-group">
            <label ><b>Message</b></label>
            <div className="col-sm-12">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            value={this.state.f_message} onChange={this.changeMessageHandler} ></textarea>
            </div>
           </div>

          <div className="divider py-1 bg-white"></div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" >Check me out</label>
          </div>
          <div className="divider py-1 bg-white"></div>
          <button type="submit" className="btn btn-primary" onClick={this.saveFeedback}>Submit</button>
          <br />
          <br />
        </form>
        </div></div></div></div>
          <br />
          <br />
          <br />
          <br />

      </div>
    )
  }
}

export default ContactUS;