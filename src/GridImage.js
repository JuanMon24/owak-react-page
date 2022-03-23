import React from 'react'

export const GridImage = ({id,title,url}) => {
    console.log(id,title,url);
  return (
    <div className='card-image-item'>
        <img src={url} ></img>
        <p>{title}</p>
    </div>
  )
}
