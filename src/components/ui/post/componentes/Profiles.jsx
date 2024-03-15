import React from 'react'

function Profiles({image}) {
    return (
        <>
            <div className="post_profile">
                <img className="post_image" src={image} alt="" />
                <div className="usernameDate">
                    <h4 className="not-margin post-username">
                        Jesus G.
                    </h4>
                    <span className="post_date">
                        4 Horas
                    </span>
                </div>
            </div>
        </>
    )
}

export default Profiles