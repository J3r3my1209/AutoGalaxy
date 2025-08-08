
import Header from '../components/Header';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function Venta() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const ventaData = {
      matriz: form.matriz.value,
      ciudad: form.ciudad.value,
      marca: form.marca.value,
      modelo: form.modelo.value,
      año: parseInt(form.año.value),
      detalles: form.detalles.value,
      nombres: form.nombres.value,
      placa: form.placa.value,
      // Las fotos no se guardan aquí, se requiere Firebase Storage para eso
    };

    try {
      await addDoc(collection(db, 'ventas'), ventaData);
      alert('¡Vehículo publicado exitosamente!');
      form.reset();
    } catch (error) {
      console.error('Error al guardar la venta:', error);
      alert('Hubo un problema al publicar el vehículo.');
    }
  };

  return (
    <>
      <Header />
      <div className="compra">
        <main className="container">
          <section className="formulario-container">
            <form className="formulario-venta" onSubmit={handleSubmit}>
              <div className="fila">
                <select name="matriz" required>
                  <option value="">Matriz</option>
                  <option value="Quito">Quito</option>
                  <option value="Guayaquil">Guayaquil</option>
                </select>
                <select name="ciudad" required>
                  <option value="">Ciudad</option>
                  <option value="Ambato">Ambato</option>
                  <option value="Cuenca">Cuenca</option>
                </select>
              </div>

              <div className="fila">
                <input type="text" name="marca" placeholder="Marca" required />
                <input type="text" name="modelo" placeholder="Modelo" required />
              </div>

              <div className="fila">
                <input type="number" name="año" placeholder="Año" required />
                <input type="text" name="detalles" placeholder="Detalles" required />
              </div>

              <div className="fila">
                <input type="text" name="nombres" placeholder="Nombres" required />
                <input type="text" name="placa" placeholder="Placa" required />
              </div>

              <div className="fila fotos">
                <label htmlFor="fotos">Fotos</label>
                <input type="file" name="fotos[]" multiple accept="image/*" />
              </div>

              <button type="submit" className="btn">Publicar</button>
            </form>
          </section>

          <section className="preview-imagen">
            <img
              src="https://media.elcomercio.com/wp-content/uploads/2025/01/Venta-vehiculos.jpg"
              alt="Vista previa"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default Venta;
