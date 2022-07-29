import React from 'react'
import Footer from '../Footer'
import { NavbarUse } from '../NavbarUse'
import PreviousRecipe from './PreviousRecipe'
import RecipeAdd from './RecipeAdd'


export const RecipeHome = () => {
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
          <div>
            <h4>recipe1</h4>
         </div>
          <div>
            <h4>recipe2</h4>
          </div>
          <div>
            <h4>recipe3</h4>
          </div>
        </div>
        </div>
      </div>
      </div>
      <PreviousRecipe/>
      <Footer />
    </>
  )
}

