import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RecipeAdd = () => {
  return (
    <div className="col-sm">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recipe's Title</Form.Label>
        <Form.Control type="text" placeholder="Recipes title" />
        <Form.Text className="text-muted">
          Remember, all recipes are private.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recipe</Form.Label>
        <Form.Control type="textarea" placeholder="Your Recipe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Submit me!" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Recipe
      </Button>
    </Form>
      </div>
  )
}

export default RecipeAdd