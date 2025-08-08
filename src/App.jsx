import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Compra from './pages/Compra'
import Venta from './pages/Venta'
import Contacto from './pages/Contacto'
import Formulario from './pages/Formulario'
import Iniciarsesion from './pages/iniciarsesion'
import Registrarse from "./pages/Registrarse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/venta" element={<Venta />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/iniciarsesion" element={<Iniciarsesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
