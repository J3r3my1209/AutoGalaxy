import React, { useState, useEffect } from "react";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Simula carga inicial desde localStorage
  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(guardado);
  }, []);

  // Guarda cambios en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const eliminarProducto = (id) => {
    const actualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(actualizado);
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    const actualizado = carrito.map((producto) =>
      producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
    );
    setCarrito(actualizado);
  };

  return (
    <div className="carrito-container">
      <h2>🛒 Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id} className="item-carrito">
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <input
              type="number"
              value={producto.cantidad}
              onChange={(e) => cambiarCantidad(producto.id, parseInt(e.target.value))}
              min="1"
            />
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;
