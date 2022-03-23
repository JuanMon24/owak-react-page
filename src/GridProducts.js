import React from 'react'

export const GridProducts = ({id,title,url,price}) => {
  return (
    <div className='card-product-item'>
        <img src={url} ></img>
        <p className='producto'>{title}</p>
        <p className='precio'>{price}</p>
    </div>
  )
}
