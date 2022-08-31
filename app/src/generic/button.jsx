import "../App.css"

const Button = ({children}) => {
    return(
        <>
            <button className="generic-button">{children}</button>
        </>
    )
}

export default Button;