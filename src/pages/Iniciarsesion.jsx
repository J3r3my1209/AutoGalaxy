import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


const IniciarSesion = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirige al inicio
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img
              src="/Imagenes/logo2.png"
              alt="Logo Auto Galaxy"
              className="logo"
            />
          </Link>
          <div>
            <h1 className="title">AUTOGALAXY</h1>
            <p className="subtitle">
              EN AUTO GALAXY TE LLEVAMOS AL VOLANTE DE TUS SUEÑOS<br />
              EXPLORA NUESTRA SELECCIÓN DE VEHÍCULOS CONFIABLES, MODERNOS Y LISTOS PARA LA AVENTURA
            </p>
          </div>
        </div>
      </header>

      <div className="banner">
        <img
          src="/Imagenes/inicio.png"
          alt="Auto Galaxy"
        />
      </div>

      <main className="main">
        <form onSubmit={handleLogin}>
          <label className="form-label" htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Ingresar"
            className="form-input"
          />

          <label className="form-label" htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            placeholder="Ingresar"
            className="form-input"
          />

          <div className="button-group">
            <button type="submit" className="btn-primary">
              Iniciar Sesión
            </button>

            <Link to="/registrarse" style={{ flexGrow: 1 }}>
              <button type="button" className="btn-secondary">
                Registrarse
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default IniciarSesion;
