import { Card, Form, Input, Button, Error } from "../../AuthForms/AuthForms";
import {useState} from 'react'
import api from '../../../services/api';
import {useAuth} from '../../../context/auth'

const PostReview = ({history}) => {
    const [isError, setIsError] = useState(false);
      const [personName, setPersonName] = useState("")
      const [job, setJob] = useState("");
      const [reviewText, setReviewText] = useState("");
      const {currentUser} = useAuth();
      
      function postReviews(){
        const userToken = localStorage.getItem("tokens")
        const payload={
            "name":personName,
            "job":job,
            "reviewText": reviewText,
            "profilePicture" : currentUser.photoURL 
        }
        
          fetch(api.reviews,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'user-token' : userToken
            },
            body: JSON.stringify(payload)   
        })
        .then(res => history.push('/reviews'))
        .catch(err => {
          setIsError(true)
            
        })
       
        
    }


    return(
        <Card>
        <h2>Leave a Review</h2>
        <Form>
          <Input
            type="text"
            value={personName}
            onChange={e => {
              setPersonName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <Input
            type="text"
            value={job}
            onChange={e => {
              setJob(e.target.value);
            }}
            placeholder="Enter your occupation"
          />
          <Input
            type="textarea"
            value={reviewText}
            onChange={e => {
              setReviewText(e.target.value);
            }}
            placeholder="Enter your review"
          />
          <Button onClick={postReviews}>Post the review!</Button>
        </Form>
          { isError &&<Error>The username or password provided were incorrect!</Error> }
          
  
      </Card>)
}

export default PostReview;

