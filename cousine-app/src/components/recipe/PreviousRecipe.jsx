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
                <h4>{name}</h4>
              </div>
              <div>
                <h4>{description}</h4>
              </div>
              <div>
                <h4>{ingredients}</h4>
              </div>
              <div>
                <h4>{steps}</h4>
              </div>
              <div>
                <h4>{image}</h4>
              </div>
              <div>
                <h4>{category}</h4>
              </div>
              <div>
                <h4>{time}</h4>
              </div>
              <div>
                <h4>{date}</h4>
              </div>
              <div>
                <h4>{user}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PreviousRecipe;