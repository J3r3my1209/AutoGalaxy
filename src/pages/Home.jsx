import React from "react";
import Header from "../components/Header";
function Home() {
  return (
    <>
      <Header />
      <div>
        <main>
          <section className="hero">
            <img
              src="/Imagenes/inicio.png"
              alt="AutoGalaxy"
            />
          </section>

          <section className="sobre-nosotros">
            <h2>SOBRE NOSOTROS</h2>

            <div className="info">
              <div className="caja">
                <button>MISIÓN</button>
                <div>
                  <p>
                    Proveer a nuestros clientes vehículos de alta calidad, ofreciendo seguridad, confianza y excelente
                    servicio personalizado.
                  </p>
                </div>
              </div>

              <div className="caja">
                <button>VISIÓN</button>
                <div>
                  <p>
                    Ser líderes en el mercado automotriz ofreciendo experiencias de compra inigualables con tecnología y
                    atención innovadora.
                  </p>
                </div>
              </div>
            </div>

            <div className="contenido-extra">
              <div className="video">
                <iframe
                  src="https://www.youtube.com/watch?v=s6H5KRixO1w"
                  frameBorder="0"
                  allowFullScreen
                  title="Video de AutoGalaxy"
                ></iframe>
              </div>
              <div className="mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.632204289541!2d-78.4893367!3d-0.2102914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses-419!2sec!4v1717094171000!5m2!1ses-419!2sec"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Escuela Politécnica Nacional"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
