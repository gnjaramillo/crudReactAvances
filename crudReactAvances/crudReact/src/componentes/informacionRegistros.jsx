// informacionRegistro.jsx

import React from 'react'
import './informacionRegistro.css'

//Recibe cantidadRegistros y totalRegistros como propiedades
const InformacionRegistros = ({ cantidadRegistros, totalRegistros }) => {
    return (
      <div className='infoRegistros'>
        ... {cantidadRegistros} de {totalRegistros} registros.
      </div>
    );
  }

export default InformacionRegistros