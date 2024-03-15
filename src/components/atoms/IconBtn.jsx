import './IconBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconBtn({icon, text, background, color}) {
    return (
        <button
        className='CustomIconButtonClass'
        style={{
            background: background,
            border: `solid ${background} 1px`,
            color: color}}
        ><FontAwesomeIcon icon={icon}/> {text}</button>
    );
}

export default IconBtn;