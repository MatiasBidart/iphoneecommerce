import React from 'react'

const ProductBlock = ({imgURL,name, price}) => {
  return (
    <div className='sctn-blck img-prdct'>
    <img className='pllondra' src={imgURL} alt='hola'></img>
    <h5>{name}</h5>
    <p>AR$ {price}</p>
    </div>
  )
}

export default ProductBlock