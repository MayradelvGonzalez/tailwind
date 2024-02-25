import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import './MyForm.css';

const MyForm = () => {
  // Estados para manejar el mensaje y el estado de envío
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  // Función para manejar cambios en el campo de mensaje
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Realizar acciones adicionales con el mensaje, como enviarlo a un servidor, etc.
    console.log("Mensaje recibido:", message);

    // Limpiar el campo de mensaje después de enviar y marcar como enviado
    setMessage('');
    setSubmitted(true);
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

        {/* Mostrar mensaje de enviado si el formulario ha sido enviado */}
        {isSubmitted && <p id="mensaje">Send Message 📨 Thanks!!!</p>}
      </fieldset>
    </div>
  );
};

export default MyForm;
