import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/styles.css";
import { useForm } from '../../hooks/useForm';


const PreviousRecipe = ({name, description, category, ingredients, date, user}) => {

  
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>titulo: {name}</h2>
            <hr />
            <p>descripcion: {description}</p>
            <p>Categoria: {category}</p>
            <p>Ingredientes:{ingredients}</p>
            <p>Fecha: {date}</p>
            <p>Usuario: {user}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviousRecipe;