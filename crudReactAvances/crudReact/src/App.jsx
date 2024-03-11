import React from 'react';
import Arreglo from './componentes/arreglo';

const datos = [
  { id: 1, nombre: "luis Garcia", rol: "Director" },
  { id: 2, nombre: "Henry Bastidas", rol: "Instructor" },
  { id: 3, nombre: "Guisella Nathali Jaramillo", rol: "Aprendiz SENA" },
  { id: 4, nombre: "David Astaiza ", rol: "Instructor" },
  { id: 5, nombre: "Jesus Paladines", rol: "Aprendiz SENA" },
  { id: 6, nombre: "Jairo Muñoz", rol: "Aprendiz SENA" },
];

function App() {
  return (
    <div className="App">
      <Arreglo datos={datos} />
    </div>
  );
}

export default App;
