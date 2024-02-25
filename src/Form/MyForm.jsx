import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import './MyForm.css';

const MyForm = () => {
  // Estado para manejar el mensaje
  const [message, setMessage] = useState('');

  // Función para manejar cambios en el campo de mensaje
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Aquí puedes realizar acciones adicionales con el mensaje, como enviarlo a un servidor, etc.
    // Por ahora, simplemente mostraremos el mensaje en la consola.
    console.log("Mensaje recibido:", message);
  };

  return (
    <div id="formulario">
      <fieldset>
        <legend>Contact me!</legend>
        <div className="seccion">
          <TextField
            label="Full name"
            variant="outlined"
            id="opcion"
          />
        </div>
        <div className="seccion">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            id="opcion2"
          />
        </div>
        <div className="seccion">
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            id="opcion3"
            value={message}
            onChange={handleInputChange}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className="seccion"
          id="opcion4"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </fieldset>
    </div>
  );
};

export default MyForm;

