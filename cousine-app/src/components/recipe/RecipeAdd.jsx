import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../hooks/useForm';
import swal from "sweetalert";
import PreviousRecipe from './PreviousRecipe';
import { useState,useRef } from 'react';
import { RecipeHome } from './RecipeHome';
import { useEffect } from 'react';





const RecipeAdd = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    priceUnitary: "",
    size: "",
    description: ""
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const inputFileRef = useRef();

  const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value);

      setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);
      console.log(inputFileRef?.current?.files);
      setIsFormVisible(false);
  };

  return (
  <>
   
      <form id="formu" onSubmit={handleSubmit} className="row">
        <h1>FORM SEND</h1>
        <div className="col-md-6">
          <label>Name</label>
          <input
            placeholder="Text input"
            name="name"
            value={formValues?.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Size</label>
          <input
            type="number"
            placeholder="Text input"
            name="size"
            value={formValues.size}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Price Unitary</label>
          <input
            type="number"
            placeholder="Text input"
            name="priceUnitary"
            value={formValues.priceUnitary}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Description</label>
          <input
            placeholder="Text input"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>File / Image</label>
          <input type="file" ref={inputFileRef} />
        </div>
        <button type="submit" className="color-primary">
          Save
        </button>
      </form>
    
   
      <PreviousRecipe data={formValues} />
      
    
  </>
  );
}


export default RecipeAdd