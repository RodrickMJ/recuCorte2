import './titles.css'

export function Titles ({customClass,text}){
    return(
        <>
            <h1 className={customClass}>
                {text}
            </h1>
        </>
    );
}