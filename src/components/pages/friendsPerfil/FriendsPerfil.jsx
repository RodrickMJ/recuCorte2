import React from 'react'
import { Titles } from '../../ui/Titles/Titles'
import Pharagraps from '../../ui/Pharagraps/Pharagraps'
import Images from '../../ui/Imag/Images'
import './friendsPerfil.css'

function FriendsPerfil() {
    return (
        <>
            <div className='cont-friends-seg'>
                <Titles text="Amigos" customClass="friedns-til" />
                <div className='to-sear'>
                    <Pharagraps text="123 amigos" customClass="total-fri" />
                    <Pharagraps text="Buscar amigos" customClass="search-fri" />
                </div>
                <div className='friend-info'>
                    <Images customClass="picture-frier" image="zoro.jpg" />
                    <div >
                        <Titles text="Roronoa Zoro" customClass="name-frie" />
                        <Pharagraps text="Ing. Sistemas computacionales" customClass="carrer-frie" />
                    </div>
                </div>
                <div className='friend-info'>
                    <Images customClass="picture-frier" image="sanji.jpeg" />
                    <div>
                        <Titles text="Sanji Wano" customClass="name-frie" />
                        <Pharagraps text="Lic. Marketing Digital" customClass="carrer-frie" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendsPerfil