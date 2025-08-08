import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registrarse() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      // Aquí podrías guardar el nombre en Firestore si lo estás usando
      // Por ejemplo:
      // await setDoc(doc(db, "usuarios", user.uid), { nombre, correo });

      navigate("/iniciarsesion"); // Redirige al login después del registro
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <header className="registro-header">
        <div className="logo-container">
          <Link to="/">
            <img src="/Imagenes/logo2.png" alt="Logo Auto Galaxy" />
          </Link>
          <div>
            <h1>AUTOGALAXY</h1>
            <p>
              EN AUTO GALAXY TE LLEVAMOS AL VOLANTE DE TUS SUEÑOS<br />
              EXPLORA NUESTRA SELECCIÓN DE VEHÍCULOS CONFIABLES, MODERNOS Y LISTOS PARA LA AVENTURA
            </p>
          </div>
        </div>
      </header>

      <div className="registro-container">
        <h2 className="registro-title">Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            className="registro-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="registro-input"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="registro-input"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <button type="submit" className="registro-button">Crear cuenta</button>
        </form>

        {error && <p className="registro-error">{error}</p>}

        <Link to="/iniciarsesion" className="registro-link">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </div>
    </div>
  );
}

export default Registrarse;
