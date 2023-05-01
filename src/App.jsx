import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [productos, setProductos] = useState([]);

  function incrementar() {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  const getProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <h1>Contador</h1>
      {contador != 0 ? <h2>Hola</h2> : null}
      <h2>Contador: {contador}</h2>
      <button onClick={resetear}>Resetear valor</button>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      {productos.map((producto) => (
        <div>
          <p>{producto.title}</p>
          <p>{producto.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
