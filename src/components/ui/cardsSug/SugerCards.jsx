import React from 'react'
import './sugerCards.css'

function SugerCards({image,title,content,infoBott}) {
  return (
   <>
    <div className='card-this'>
        <img src={image} alt="picture" />
        <div className='underCard'>
          <h1>{title}</h1>
          <p>{content}</p>
          <button>{infoBott}</button>
        </div>
    </div>
   </>
  )
}

export default SugerCards
