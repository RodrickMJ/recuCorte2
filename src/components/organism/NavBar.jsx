import React from 'react'
import BtnAnimated from '../atoms/BtnAnimated'
import SearchInput from '../molecules/SearchInput'
import Logo from '../../assets/img/Logo.png'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css'

function NavBar() {
  return (
    <>
        <nav className='container-nav'>
            <img src={Logo} alt="Logo" width={150} height={150} />
            <SearchInput type="text" placeholder="Buscar ? "></SearchInput>

            <BtnAnimated text="Inicio"></BtnAnimated>
            <BtnAnimated text="Grupos"></BtnAnimated>
            <BtnAnimated text="Articulos"></BtnAnimated>
            <BtnAnimated text="Comunicados"></BtnAnimated>

            <div className='user-options'>

            <BtnAnimated text="Mi perfil"></BtnAnimated>
            
            <IconButton aria-label="Example">
                 <SettingsSharpIcon sx={{width:40 , height:40}}/>
            </IconButton>
            
              

            </div>
            
            


        </nav>
    </>
  )
}

export default NavBar