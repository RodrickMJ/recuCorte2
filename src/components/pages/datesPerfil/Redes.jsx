import React from 'react'
import './datesPerfil.css'
import Images from '../../ui/Imag/Images'

function Redes() {
  return (
    <>
        <div className='redes-perfil'>
                        <nav className="post_interactions_nav">
                            <li>
                                <span className="post_interactions_icon">
                                    <Images customClass="interactions_icon" image="instagram.png" />
                                </span>
                                <a href="" className="post_interactions_linkp">@OnePiece</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon">
                                    <Images customClass="interactions_icon" image="facebook.png" />
                                </span>
                                <a href="" className="post_interactions_linkp">/OnePiece</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon">
                                    <Images customClass="interactions_icon" image="twiter.png" />
                                </span>
                                <a href="" className="post_interactions_linkp">@OnePiece</a>
                            </li>
                        </nav>
                </div>
    </>
  )
}

export default Redes