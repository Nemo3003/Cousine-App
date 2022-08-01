import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../hooks/useForm';
import swal from "sweetalert";
import PreviousRecipe from './PreviousRecipe';
import { useState } from 'react';
import { RecipeHome } from './RecipeHome';
import { useEffect } from 'react';





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
    //add this all to an object to be sent to anther component
    const [recipe, setRecipe] = useState({
      name: '',
      description: '',
      ingredients: '',
      steps: '',
      image: '',
      category: '',
      time: '',
      date: '',
      user: '',
  }
  );
  let { name, description, ingredients, steps, image, category, time, date, user } = recipe;
  const [recipes, setRecipes] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
    setRecipe(data);
    onResetForm();
  }
  let recipeList = recipes.map(recipe => {
    return <PreviousRecipe key={recipe.id} name={recipe.name} description={recipe.description} ingredients={recipe.ingredients} steps={recipe.steps} image={recipe.image} category={recipe.category} time={recipe.time} date={recipe.date} user={recipe.user} />
  }
  )

  const handleAddRecipe = () => {
    if (formState.name === '' || formState.description === '' || formState.ingredients === '' || formState.steps === '' || formState.image === '' || formState.category === '' || formState.time === '' || formState.date === '' || formState.user === '') {
      swal("Please fill in all fields", "", "error");
    } else {
      swal("Recipe added successfully", "", "success");
    }
  }
  
//use localstorage to store the recipes
  useEffect(() => {
    const data = localStorage.getItem('recipes');
    if (data) {
      setRecipes(JSON.parse(data));
    }
  }, []);

  return (
    <>
    <div className="container">
      {recipeList}
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
        <Button variant="primary" type="submit" onClick={handleAddRecipe}>
          Submit
        </Button >
        <Button variant="secondary" type="button" onClick={onResetForm}>
          Reset
        </Button>
      </Form>

    </div>
    <div className="col-sm">
    <PreviousRecipe name={name} description={description} ingredients={ingredients} steps={steps} image={image} category={category} time={time} date={date} user={user} />
    </div>
    </>
  );
}


export default RecipeAdd