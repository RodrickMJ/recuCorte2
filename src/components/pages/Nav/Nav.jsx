import Images from "../../ui/Imag/Images";
import Inputs from "../../ui/Input/Inputs";
import { AiFillSetting } from "react-icons/ai";
import './nav.css'

export function Nav () {
    let logo = "Logo.png";

    return(
        <>
        <div className="nav-incor">
            <div className="bando">
            <Images customClass="logo-img" image={logo} />
            <Inputs type="text" placeholder="buscar" />
            <ul>
                <li className="nav-options"><a href="#">Inicio</a></li>
                <li className="nav-options"><a href="#">Grupos</a></li>
                <li className="nav-options"><a href="#">Articulos</a></li>
                <li className="nav-options"><a href="#">Comunicados</a></li>
            </ul>
            </div>

            <div className="infopt">
                <ul>
                    <li className="nav-options"><a href="#">Mi perfil</a></li>
                    <li className="nav-options"><a href="#"><AiFillSetting size={20} /></a></li>
                </ul>
            </div>
        </div> 
        </>
    );
}
