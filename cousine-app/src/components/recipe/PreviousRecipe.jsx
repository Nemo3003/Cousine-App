import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/styles.css";


const PreviousRecipe = ({recipes}) => {

  const [recipesList, setRecipesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipesList(recipes);
    setLoading(false);
  }, function() {
    setRecipesList(recipes);
    setLoading(false);
  }
  );
  return (
    <>
    {/**Show the recipe list sent from the RecipeAdd*/}


    </>
  );
};

export default PreviousRecipe;