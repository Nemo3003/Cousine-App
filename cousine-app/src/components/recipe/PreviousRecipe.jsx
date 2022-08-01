import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/styles.css";
import { useForm } from '../../hooks/useForm';


const PreviousRecipe = ({recipes="one"}) => {

  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    switch (recipes.length) {
      case 0:
        setIsLoading(true);
        break;
      default:
        setIsLoading(false);
        break;
    }}, []);

  if(isLoading){
    return <p>Is loading!</p>
  }
console.log('mine' +recipes)
//TODO: I need to figure out how to pass default values to the recipes
  
  return(
    <>
    {/*display what we got from the props*/}
    
    {
      recipes.map(
        (recipe, index) => {
          return (
            <div className="col-sm" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <p className="card-text">{recipe.ingredients}</p>
                  <p className="card-text">{recipe.steps}</p>
                  <p className="card-text">{recipe.image}</p>
                  <p className="card-text">{recipe.category}</p>
                  <p className="card-text">{recipe.time}</p>
                  <p className="card-text">{recipe.date}</p>
                  <p className="card-text">{recipe.user}</p>
                </div>
              </div>
            </div>
          );})
    }
      
    </>
  )
}

export default PreviousRecipe;