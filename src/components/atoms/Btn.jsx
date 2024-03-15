import './Btn.css'

const handleRedireccionar = () => {
    window.location.href = './pages/Feed.jsx';
  };

function Btn({text, background, color}) {
    return (
        <button
        onClick={handleRedireccionar}
        className='CustomButtonClass'
        style={{
            background: background,
            border: `solid ${background} 1px`,
            color: color}}
        >{text}</button>
    );
}

export default Btn;