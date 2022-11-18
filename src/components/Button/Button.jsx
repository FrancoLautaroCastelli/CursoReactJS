

function Button(props){
    
    
    return(
        <button onClick={props.onClick} className="btn btn-xs mx-2.5">
            {props.children}
        </button>
    )
}   

export default Button;