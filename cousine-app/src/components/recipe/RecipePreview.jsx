import React from 'react'
import PreviousRecipe from './PreviousRecipe'

const RecipePreview = () => {
  return (
    <div className="container-fluid">
        <h1>Latest Recipes</h1>
        <div className="row">
          <div className="col-sm">
            <h3>First recipe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-sm">
            <h3>Second recipe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-sm">
            <h3>Second recipe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          </div>
      </div>
  )
}

export default RecipePreview