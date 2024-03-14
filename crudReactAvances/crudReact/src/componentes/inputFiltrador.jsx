// InputFiltrador.jsx
import React from 'react';
import './inputFiltrador.css'


//Recibe filtro y onFiltroChange como propiedades para manejar el estado del filtro.
const InputFiltrador = ({ filtro, onFiltroChange }) => {
  return (
    <div className="inputFiltro">
      <input
        type="text"
        placeholder="Filtrar por la inicial del nombre"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
}

export default InputFiltrador;
