package com.main.controller;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.main.exception.ResourceNotFoundException;
import com.main.model.Feedback;
import com.main.repository.FeedbackReository;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
@RequestMapping("/")
public class FeedbackController {
	
	@Autowired
	private FeedbackReository feedbackrepo;
	
	//get all the feedback
	@GetMapping("/Feedback")
	public List<Feedback> getallfeedback(){
		
		return feedbackrepo.findAll();
	}
	
	@PostMapping("/Feedback")
	public Feedback createfeedback(@RequestBody Feedback feedback )
	{
		return feedbackrepo.save(feedback);
	}
	

	//Delete Customer rest api
	@DeleteMapping("/Feedback/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFeedback(@PathVariable int id){
		Feedback feedback = feedbackrepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Feedback Not Exists with id :" +id));
		
		feedbackrepo.delete(feedback);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	
	

}
