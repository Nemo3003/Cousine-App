import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/styles.css";
import { useForm } from '../../hooks/useForm';


const PreviousRecipe = ({data}) => {
//Save the data recieved in an asyncronous way
const [recipe, setRecipe] = useState(data);
  
  return(
    <>
      <div>
        <p>Name: {data?.name}</p>
        <p>priceUnitary: {data?.priceUnitary}</p>
        <p>description: {data?.description}</p>
      </div>
    
    </>
  )
}

export default PreviousRecipe;