import React from 'react'
import './articles.css'

function Articles({tContent,pContent,customClass}) {
  return (
    <>
        <div className={customClass}>
            <h1>
                {tContent}
            </h1>
            <p>
                {pContent}
            </p>
        </div>
    </>
  )
}

export default Articles