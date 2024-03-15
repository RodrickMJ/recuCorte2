import React from 'react'

function PostBaner({ banner }) {
    return (
        <>
            <div className="post_banner">
                <img className="post_thumbnail" src={banner} alt="" />
            </div>
            <div className="post_interactions">
                <nav className="post_interactions_nav">
                    <li>
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">10 me gusta</a>
                    </li>
                    <li>
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link_inherit ">2 Comentarios</a>
                    </li>
                    <li>
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">0 Compartir</a>
                    </li>
                </nav>
            </div>
        </>
    )
}

export default PostBaner