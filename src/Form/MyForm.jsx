import React from "react";
import { TextField, Button } from "@mui/material";
import './MyForm.css';

const MyForm = () => {
  return (
   
    <div id="formulario">
    <fieldset><legend>Contact me!</legend>
    <div className="seccion"> <TextField label="Full name" variant="outlined"  id="opcion"/></div>
    <div className="seccion"> <TextField label="Email" variant="outlined" type="email"  id="opcion2"/></div>
    <div className="seccion"> <TextField label="Message" variant="outlined" multiline rows={6} id="opcion3"/></div>
      <Button variant="contained" color="primary" className="seccion" id="opcion4">
        Submit
      </Button></fieldset>
    </div>
  );
};

export default MyForm;
