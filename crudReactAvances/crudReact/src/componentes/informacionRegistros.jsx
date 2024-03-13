// informacionRegistro.jsx

import React from 'react'
import './informacionRegistro.css'

const InformacionRegistros = ({ cantidadRegistros, totalRegistros }) => {
    return (
      <div className='infoRegistros'>
        ... {cantidadRegistros} de {totalRegistros} registros.
      </div>
    );
  }

export default InformacionRegistros