import React from "react";
import Header from "../components/Header";
function Contacto() {
  return (
    <>
      <Header />
      <div className="contacto-container">
        <main>
          <section>
            <img
              src="/Imagenes/contacto-banner.png"
              alt="Banner Contacto"
              className="contacto-banner"
            />
          </section>

          <section className="contacto-section">
            <div className="contacto-mapa">
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Encuéntranos en:
              </h2>
              <iframe
                src="https://www.google.com/maps?q=Escuela+Politécnica+Nacional,+Quito,+Ecuador&output=embed"
                allowFullScreen
                loading="lazy"
                title="Mapa Escuela Politécnica Nacional"
              />
            </div>

            <div className="contacto-info">
              <h2>Matriz AutoGalaxy</h2>
              <p>Ubicación: Av. Ladrón de Guevara E11-253, Quito 170143</p>
              <p>Correo: autogalaxy@gmail.com.ec</p>
              <p>Teléfono: 099344635226</p>

              <div className="contacto-redes">
                {[
                  { href: "https://www.facebook.com", alt: "Facebook", src: "/Imagenes/facebook.png" },
                  { href: "https://www.instagram.com", alt: "Instagram", src: "/Imagenes/instagram.png" },
                  { href: "https://www.whatsapp.com", alt: "WhatsApp", src: "/Imagenes/whatsapp.png" },
                  { href: "https://www.twitter.com", alt: "X (Twitter)", src: "/Imagenes/x-icon.png" },
                ].map(({ href, alt, src }) => (
                  <a key={alt} href={href} target="_blank" rel="noreferrer">
                    <img src={src} alt={alt} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Contacto;
