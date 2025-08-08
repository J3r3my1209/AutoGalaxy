import React, { useState } from "react";
import Header from "../components/Header";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Formulario() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    correo: "",
    provincia: "",
    ciudad: "",
    asunto: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await addDoc(collection(db, "calificaciones"), {
        ...formData,
        rating,
        fecha: new Date(),
      });
      setSuccess("¡Gracias por tu calificación!");
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        correo: "",
        provincia: "",
        ciudad: "",
        asunto: "",
        mensaje: "",
      });
      setRating(0);
    } catch (err) {
      setError("Hubo un error al enviar el formulario.");
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="formulario-container">
        <main className="formulario-main">
          <section className="formulario-titulo">¡Califícanos!</section>

          <section className="formulario-seccion">
            <div className="formulario-img-container">
              <img
                src="https://www.odontowebperu.com/OdontoApps/img/yo.svg"
                alt="Calificación"
                className="formulario-img"
              />
            </div>

            <form className="formulario-form" onSubmit={handleSubmit}>
              {[
                { label: "Nombre", type: "text", placeholder: "Tu nombre", name: "nombre" },
                { label: "Apellido", type: "text", placeholder: "Tu apellido", name: "apellido" },
                { label: "Teléfono", type: "tel", placeholder: "Tu número de teléfono", name: "telefono" },
                { label: "Dirección", type: "text", placeholder: "Tu dirección", name: "direccion" },
                { label: "Correo", type: "email", placeholder: "Tu correo electrónico", name: "correo" },
                { label: "Provincia", type: "text", placeholder: "Tu provincia", name: "provincia" },
                { label: "Ciudad", type: "text", placeholder: "Tu ciudad", name: "ciudad" },
                { label: "Asunto", type: "text", placeholder: "Motivo del mensaje", name: "asunto" },
              ].map(({ label, type, placeholder, name }) => (
                <div key={name} className="formulario-campo">
                  <label htmlFor={name}>{label}:</label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="formulario-input"
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div className="formulario-campo">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe un resumen breve"
                  rows={4}
                  className="formulario-textarea"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formulario-estrellas">
                <label>Califícanos:</label>
                <div className="estrellas">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <label
                      key={star}
                      onClick={() => handleStarClick(star)}
                      className={rating >= star ? "seleccionada" : ""}
                    >
                      ★
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="formulario-btn">
                Enviar
              </button>
            </form>

            {success && <p className="formulario-success">{success}</p>}
            {error && <p className="formulario-error">{error}</p>}
          </section>
        </main>
      </div>
    </>
  );
}

export default Formulario;
