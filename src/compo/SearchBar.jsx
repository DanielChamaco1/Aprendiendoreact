import React from 'react'
import "../estilos/SearchBar.css"
function SearchBar() {
  return (
    <div className='Search-bar_container'>
        <input type="text" value="Search..."/>
        <input id='Show-product' type="checkbox" />
        <label htmlFor="Show-product">
            Only show Product in stock
        </label>
    </div>
  )
}

export { SearchBar}