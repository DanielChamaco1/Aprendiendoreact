
import React from 'react'
import '../estilos/ProductRow.css'
function ProductRow() {
  const Producto="Nexus7";
  const Precio="199.99"
  return (
    <div className='product-row'> 
      <span>{Producto}</span> <span>{`$ ${Precio}`}</span>
    </div>
  )
}
export{ProductRow}