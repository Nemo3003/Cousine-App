import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../hooks/useForm';
import swal from "sweetalert";



const RecipeAdd = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        name: '',
        description: '',
        ingredients: '',
        steps: '',
        image: '',
        category: '',
        time: '',
        date: '',
        user: '',
        
    });
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
  }

  return (
    <div className="col-sm">
      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formState.name} onChange={onInputChange} placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={formState.description} onChange={onInputChange} placeholder="Enter description" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control type="textarea" name="ingredients" value={formState.ingredients} onChange={onInputChange} placeholder="Enter ingredients" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Steps</Form.Label>
          <Form.Control type="text" name="steps" value={formState.steps} onChange={onInputChange} placeholder="Enter steps" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" value={formState.image} onChange={onInputChange} placeholder="Enter image" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={formState.category} onChange={onInputChange} placeholder="Enter category" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Time</Form.Label>
          <Form.Control type="text" name="time" value={formState.time} onChange={onInputChange} placeholder="Enter time" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" name="date" value={formState.date} onChange={onInputChange} placeholder="Enter date" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>User</Form.Label>
          <Form.Control type="text" name="user" value={formState.user} onChange={onInputChange} placeholder="Enter user" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button >
      
        <Button variant="secondary" type="button" onClick={onResetForm}>
          Reset
        </Button>
      </Form>

      </div>
  )
}

export default RecipeAdd