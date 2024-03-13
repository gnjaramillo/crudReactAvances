// SelectCantidad.jsx
import React from 'react';
import './select.css'

const Select = ({ onChange }) => {
  return (
    <div>
      <select className='select'  onChange={onChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default Select;
