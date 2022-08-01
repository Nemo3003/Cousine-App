import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/styles.css";
import { useForm } from '../../hooks/useForm';


const PreviousRecipe = ({name, description, ingredients,steps, image, category, time,date, user}) => {

  

  
  return(
    <>
      <div className="container-recipes">
        <div className="container">
          <h1>Added recipes</h1>
          <div className="row">
            <div className="col-sm">
              <h3>All my recipes</h3>
              <div>
                <h4>Titulo: {name}</h4>
              </div>
              <div>
                <h4>Description: {description}</h4>
              </div>
              <div>
                <h4>Ingredientes: {ingredients}</h4>
              </div>
              <div>
                <h4>Pasos: {steps}</h4>
              </div>
              <div>
                <h4>Imagen: {image}</h4>
              </div>
              <div>
                <h4>Categoria: {category}</h4>
              </div>
              <div>
                <h4>Duracion: {time}</h4>
              </div>
              <div>
                <h4>Fecha: {date}</h4>
              </div>
              <div>
                <h4>Usuario: {user}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PreviousRecipe;