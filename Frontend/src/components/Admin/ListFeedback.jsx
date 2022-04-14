import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService';
import background from '../../images/c.jpg'



export default class ListFeedback extends Component {

constructor(props) {
    super(props);
    
    this.state ={
        feedback:[]
    }
}



componentDidMount(){
    FeedbackService.getFeedback().then((res) =>{
        this.setState({feedback :res.data})
    });
}

deleteFeedback(f_id){
    if(window.confirm("do you really want to delete this?"))
        {
               FeedbackService.deleteFeedback(f_id).then(res => {
                this.setState({feedback:this.state.feedback.filter(feedback => feedback.f_id !== f_id)});
                
            });
            
        }
}



  render() {
    return (
        <div className='feedbacklist'>
      <div className='container'>
          <h2>Feedback</h2>
          <a style={{marginRight:'1200px'}} href='/adminpage' className='btn btn-primary'>Back</a>
          <div className='row'>
          <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Message</th>
                    <th>Action</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.feedback.map(
                            feedback=>
                            <tr key={feedback.f_id}>
                                <td>{feedback.f_name}</td>
                                <td>{feedback.f_email}</td>
                                <td>{feedback.f_mobile}</td>
                                <td>{feedback.f_message}</td>
                                <td>
                                      <button  onClick={()=>this.deleteFeedback(feedback.f_id)} className="btn btn-danger" style={{marginLeft:'10px'}} >Delete</button>
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
