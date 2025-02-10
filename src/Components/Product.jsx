import React from 'react'
import ProductDetails from "./ProductDetails"
import NikeShoe from "./NikeShoe"
import "./Product.css"

const Product = () => {
  return (
    <div className='productCard'>
      <ProductDetails/>
      <NikeShoe/>
    </div>
  )
}

export default Product
