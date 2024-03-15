import React from 'react'
import './sugerencias.css'
import Articles from '../../ui/articles/Articles'
import SugerCards from '../../ui/cardsSug/SugerCards'
import Pharagraps from '../../ui/Pharagraps/Pharagraps'

function Sugerencias() {
    let img3 = "https://deltamaquinastexteis.com.br/wp-content/uploads/2022/01/Fabricas-inteligentes-saiba-tudo-sobre-esta-tendencia-textil.jpg";
    let img2 = "https://cdn.ready-market.com.tw/9c83e129/Templates/pic/software_design_1.jpg?v=952152e1";
    let img1 = "https://blogs.unitec.mx/hubfs/287524/Imported_Blog_Media/trabajos-que-tendras-como-egresado-de-la-ingenieria-de-software-1-compressor%20(2)-Dec-17-2022-06-02-01-5741-PM.jpg";
    return (
        <>
            <div className='cont-sugetions'>
                <Articles customClass="text-prin"
                    tContent="Tus Artículos "
                    pContent="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."
                />
                <div className='sug-cap'>
                    <SugerCards 
                    image={img1} 
                    title="Cary Johns" 
                    content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." 
                    infoBott="Saber más" />
                    <SugerCards 
                    image={img2}
                    title="Cary Johns" 
                    content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." 
                    infoBott="Saber más" />
                    <SugerCards 
                    image={img3}
                    title="Cary Johns" 
                    content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." 
                    infoBott="Saber más" />
                    </div>
                    <Pharagraps customClass="texfond" text="Quieres ver más contenido como este, da clic aquí o ve a la sección de artículos." />
            </div>
        </>
    )
}

export default Sugerencias
