import { useState } from "react";

import "./Contact.css"

const Contact = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sended, setSended] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [ConfEmail, setConfEmail] = useState("");

  const lettersOnlyRegex = /^[A-Za-z\s]*$/;

  // Maneja el cambio en el área de texto
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const surnameChange = (event) => {
    setSurname(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const confEmailChange = (event) => {
    setConfEmail(event.target.value);
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim() === "") {
      setError("El mensaje no puede estar vacío.");
      return;
    }
    if (!lettersOnlyRegex.test(name)) {
      setError('El campo "Nombre" solo puede contener letras.');
      return;
    }
    if (!lettersOnlyRegex.test(surname)) {
      setError('El campo "Apellido" solo puede contener letras.');
      return;
    }
    if (name.trim() === "" || surname.trim() === "" || email.trim() === "") {
      setError("Rellena todos los campos");
      return;
    }
    if (email.trim() != ConfEmail.trim()) {
      setError("Los emails no coinciden")
      return;
    }

    setError("");
    setSended("Enviado Correctamente");
    setMessage("");
    setName("");
    setSurname("");
    setEmail("");
    setConfEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Nombre..."
          aria-label="Nombre"
          type="text"
          onChange={nameChange}
        />
        <input
          value={surname}
          placeholder="Apellido..."
          aria-label="Apellido"
          type="text"
          onChange={surnameChange}
        />
        <input
          value={email}
          placeholder="Email..."
          aria-label="Email"
          type="email"
          onChange={emailChange}
        />
        <input
          value={ConfEmail}
          placeholder="Confirmar Email..."
          aria-label="Confirmacion de email"
          type="email"
          onChange={confEmailChange}
        />
        <textarea
          value={message}
          onChange={handleChange}
          rows="6"
          cols="50"
          placeholder="Escribe tu mensaje aquí..."
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {error}
          </p>
        )}
        {sended && (
          <p style={{ color: "green", fontSize: "14px", marginTop: "10px" }}>
            {sended}
          </p>
        )}
        <button
          type="submit"
          className="button-send"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
