// Array.js
import React, { useState } from 'react';
import Tabla from './tabla';
import InputFiltrador from './inputFiltrador';

const Arreglo = ({ datos }) => {
  const [filtro, setFiltro] = useState("");
  
  const filtroDatos = datos.filter((persona) => //se filtra en base a la inicial del nombre
  persona.nombre.toLowerCase().startsWith(filtro.toLowerCase())
);


  return (
      <div>
        <InputFiltrador filtro={filtro} onFiltroChange={setFiltro} />
        <br />
        <br />
        <Tabla datos={filtroDatos} />
      </div>
  );
}

export default Arreglo;
