import "./Input.css"

function Input({placeholder, type, label}) {
    return ( 
        <div className="InputClass">
            <label>{label}</label> 
            <br></br>
            <input placeholder={placeholder} type={type}></input>
            <br></br>
        </div>
    );
}

export default Input;