import React from "react";
import { TextField, Button } from "@mui/material";
import './MyForm.css';

const MyForm = () => {
  return (
   
    <div id="formulario">
    <fieldset><legend>Contact me!</legend>
      <TextField label="Full name" variant="outlined" className="seccion" />
      <TextField label="Email" variant="outlined" type="email" className="seccion" />
      <TextField label="Message" variant="outlined" multiline rows={4} className="seccion" />
      <Button variant="contained" color="primary" className="seccion">
        Submit
      </Button></fieldset>
    </div>
  );
};

export default MyForm;
