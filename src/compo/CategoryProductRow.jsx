import React from 'react'
import {ProductRow} from './ProductRow'
import "../estilos/CategoryProductRow.css"
function CategoryProductRow() {
    const title="Electronics"
  return (
    <div className='Category-container'>
        <div className='Category-title'>
            {
                title
            }
        </div>
        <div className='Category-body'>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
        </div>
    </div>
  )
}

export {CategoryProductRow}