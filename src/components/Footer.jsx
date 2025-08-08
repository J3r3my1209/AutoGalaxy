
function Footer() {
  return (
      <footer className="footer" style={{ backgroundColor: '#e6e9ed', padding: '50px 40px', marginTop: '40px' }}>
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="footer-left">
            <h2>AUTOGALAXY</h2>
            <p>
              Ubicación: Av. Ladrón de Guevara E11-253, Quito 170143<br />
              Teléfono: 099344635226<br />
              Correo: autogalaxy@gmail.com.ec
            </p>
          </div>
          <div className="footer-right" style={{ textAlign: 'right', color: '#888' }}>
            <p>Derechos Reservados</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
