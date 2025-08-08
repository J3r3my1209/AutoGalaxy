import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function Header() {
  const [usuario, setUsuario] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe(); // Limpiar listener
  }, []);

  return (
    <header>
      <div className="logo-inicio">
        <img src="/Imagenes/logo.png" alt="Logo Auto Galaxy" />
        <p>AUTOGALAXY</p>
        <p>
          EN AUTO GALAXY TE LLEVAMOS AL VOLANTE DE TUS SUEÑOS
          <br />
          EXPLORA NUESTRA SELECCIÓN DE VEHÍCULOS CONFIABLES, MODERNOS Y LISTOS PARA LA AVENTURA
        </p>
        {/* Mostrar solo si el usuario NO está logueado */}
        {!usuario && <a href="/iniciarsesion">Iniciar Sesión</a>}
      </div>

      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/compra">Compra</a></li>
          <li><a href="/venta">Venta</a></li>
          <li><a href="/contacto">Contactos</a></li>
          <li><a href="/formulario">Formulario</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
