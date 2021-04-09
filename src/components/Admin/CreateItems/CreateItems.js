import React,{useState} from 'react';
import api from '../../../services/api';
import { Card, Form, Input, Button, Error } from "../../AuthForms/AuthForms";

export default function CreateItems({history}) {
    const [isError, setIsError] = useState(false);
      const [furnitureName, setFurnitureName] = useState("")
      const [introText, setIntroText] = useState("");
      const [description, setDescription] = useState("");
      const [pictureLink, setPictureLink] = useState("");
      const [pricePerOne, setPricePerOne] = useState("");

    function postFurniture(){
        const payload={
            "name":furnitureName,
            "introText":introText,
            "description": description,
            "pictureLink" : pictureLink,
            "pricePerOne" : pricePerOne
        }
        
          fetch(api.furniture + '.json',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)   
        })
        .then(res => history.push('/catalog'))
        .catch(err => {
          setIsError(true)
            
        })
       
        
    }
    return (
        <Card>
        <h2>Add a new product.</h2>
        <Form>
          <Input
            type="text"
            value={furnitureName}
            onChange={e => {
                setFurnitureName(e.target.value);
            }}
            placeholder="Enter the name of the product."
          />
          <Input
            type="text"
            value={introText}
            onChange={e => {
              setIntroText(e.target.value);
            }}
            placeholder="Enter a short description of the product."
          />
          <Input
            type="textarea"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
            placeholder="Enter the full description of the item."
          />
           <Input
            type="textarea"
            value={pictureLink}
            onChange={e => {
              setPictureLink(e.target.value);
            }}
            placeholder="Add a product picture."
          />
          <Input
            type="textarea"
            value={pricePerOne}
            onChange={e => {
              setPricePerOne(e.target.value);
            }}
            placeholder="Add a product price."
          />
          <Button onClick={postFurniture}>Post the review!</Button>
        </Form>
          { isError &&<Error>Please fill out all the necessary fields.</Error> }
          
  
      </Card>
    )
}

