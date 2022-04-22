import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../estilos/ProductTable.css'
function ProductTable() {
  return (
    <div className='produc-table'>
      <div className='Product-Table_header'>
        <span>Nombre</span><span> Precio</span>
      </div>
      <div className='product-table_categories'>
        <CategoryProductRow/>
        <CategoryProductRow/>
      </div>
    </div>
)
}
export default ProductTable;