import React from 'react'
import './images.css'

function Images({customClass,image}) {
  return (
    <>
        <img  className={customClass}  src={image} alt="picture" />
    </>
  )
}

export default Images