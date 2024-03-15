import Input from "../molecules/Input";
import Btn from "../atoms/Btn";
import IconBtn from "../atoms/IconBtn";

import logo from '../../assets/img/logo.svg'
import './Form.css'

import { faGoogle } from "@fortawesome/free-brands-svg-icons";





function Form() {
    return ( 
        <div className="Form">
            <img src={logo}></img>
            <div className="classTexto">Iniciar sesión</div>
            <div className="classTexto">¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta.</div>
            <Input placeholder="Correo electronico" type="text" label="Correo electronico"/>
            <Input type="password" label="Contraseña"/>
            <Btn  text="Inciar Sesión" background="#b386c8" color="white"/>
            <div> ----------  o  ---------- </div>
            <IconBtn icon={faGoogle} text="Iniciar Sesión con Google" background="#b386c8" color="white"/>
            <p>¿No tienes cuenta? <a href="LINK">!Registrate aquí¡</a></p>
        </div>
    );
}

export default Form;