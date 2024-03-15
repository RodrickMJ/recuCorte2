import React from 'react'
import './perfil.css'
import { Nav } from '../../components/pages/Nav/Nav'
import { DatesPerfil } from '../../components/pages/datesPerfil/DatesPerfil'
import Articles from '../../components/ui/articles/Articles'
import FriendsPerfil from '../../components/pages/friendsPerfil/FriendsPerfil'
import Sugerencias from '../../components/pages/sugPerfil/Sugerencias'
import { Post } from '../../components/ui/post/post'

function Perfil() {
    return (
        <>
            <Nav />

            <div className='conteiner-perfil'>

                <div className='perfil-dates-post'>
                <DatesPerfil />
                <div className='dates-cont-perfil'>
                    <Articles customClass="acercaDe"
                        tContent="Acerca de mí"
                        pContent="Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel."
                    />
                    <FriendsPerfil />
                </div><br /><br /> <br />
                    <Post/>
                    <Post/>
                    <Post/>
                </div>

                <div className='sug-perfil'>
                    <Sugerencias/>
                </div>
            </div>
        </>
    )
}

export default Perfil
