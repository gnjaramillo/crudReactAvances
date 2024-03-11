// InputFiltrador.jsx
import React from 'react';
import './inputFiltrador.css'

const InputFiltrador = ({ filtro, onFiltroChange }) => {
  return (
    <div className="inputFiltro">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
}

export default InputFiltrador;
