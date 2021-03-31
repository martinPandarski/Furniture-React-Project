import React from 'react';
import {Form, Button} from 'react-bootstrap'

export default function CreateItems() {
    return (
        <div>
            <Form>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
                    Think of an interesting name.
        </Form.Text>
        </Form.Group>

    <Form.Group controlId="pictureLink">
    <Form.Label>Add a picture</Form.Label>
    <Form.Control type="text"/>
     </Form.Group>
     <Form.Group controlId="formTextArea">
    <Form.Label>Add an intro text here</Form.Label>
    <Form.Control as="textarea" rows={2}/>
    </Form.Group>
    <Form.Group controlId="formTextArea">
    <Form.Label>Add description here</Form.Label>
    <Form.Control as="textarea" rows={4}/>
    </Form.Group>
    <Form.Group controlId="formPrice">
    <Form.Label>Add a price</Form.Label>
    <Form.Control as="text"/>
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
        </Form>
        </div>
    )
}
