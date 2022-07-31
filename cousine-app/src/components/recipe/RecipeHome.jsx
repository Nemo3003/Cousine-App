import React from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import { NavbarUse } from '../NavbarUse'
import PreviousRecipe from './PreviousRecipe'
import RecipeAdd from './RecipeAdd'
import RecipePreview from './RecipePreview'


export const RecipeHome = (props) => {
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
    })


  return (
    <>
      <NavbarUse/>
      <div className="container-recipes">
      <div className="container">
      <h1>My recipes</h1>
      <div className="row">
        <RecipeAdd/>
        <div className="col-sm">
        <h3>Latest recipes</h3>
          <RecipePreview/>
        </div>
        </div>
      </div>
      </div>
      <PreviousRecipe />
      <Footer />
    </>
  )
}

