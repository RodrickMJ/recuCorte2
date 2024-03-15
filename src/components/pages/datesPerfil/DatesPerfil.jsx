import Images from '../../ui/Imag/Images';
import Pharagraps from '../../ui/Pharagraps/Pharagraps';
import { Titles } from '../../ui/Titles/Titles';
import Redes from './Redes';
import './datesPerfil.css'

export function DatesPerfil() {
    return (
        <>
            <div className='cont-userp'>
                <div className='imgs-perfil'>
                    <Images customClass="portada-img" image="one.jpg" />
                    <Images customClass="user-img" image="Dluffy.jpg" />
                </div>
                <div className='cont-datesUser'>
                    <div className='datesPersonal-user'>
                        <Titles customClass="name-p" text="Monkey D. Luffy" />
                        <Pharagraps customClass="carrera-p" text="Ing. Sistemas de la información" />
                        <Pharagraps customClass="ciudad-p" text="Chiapas, México" />
                    </div>
                    <div className='intereses-perf'>
                        <Pharagraps customClass="temas-p" text="Intereses" />
                        <ul>
                            <li>Materias</li>
                            <li>Deportes</li>
                            <li>Comida</li>
                            <li>Hobbies</li>
                            <li>Peliculas/Series</li>
                        </ul>
                    </div>
                </div>
                <Redes/>
            </div>
        </>
    );
}