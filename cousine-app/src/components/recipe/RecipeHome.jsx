import React from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import { NavbarUse } from '../NavbarUse'
import PreviousRecipe from './PreviousRecipe'
import RecipeAdd from './RecipeAdd'
import RecipePreview from './RecipePreview'


export const RecipeHome = () => {


  return (
    <>
      <NavbarUse/>
      <div className="container-recipes">
      <div className="container">
      <h1>My recipes</h1>
      <div className="row">
      <div className="col-sm">
        <RecipeAdd/>
      </div>
        <div className="col-sm">
        <h3>Latest recipes</h3>
          <RecipePreview/>
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

