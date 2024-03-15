import React from 'react'
import './Pharagraps.css'

function Pharagraps({text,customClass}) {
  return (
    <>
        <p className={customClass}>
            {text}
        </p>    
    </>
  )
}

export default Pharagraps