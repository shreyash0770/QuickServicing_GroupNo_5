
import axios from "axios"
const Feedback_API__BASE_URL="http://localhost:8080/Feedback"


class FeedbackService {
 

    getFeedback(){
      return axios.get(Feedback_API__BASE_URL);  
    }

    createFeedback(feedback){
        return axios.post(Feedback_API__BASE_URL,feedback);
    }

    deleteFeedback(feedbackId){
      return axios.delete(Feedback_API__BASE_URL + '/' +feedbackId);
  }


}

export default new FeedbackService();