import "../App.css";
import arrow from "../static/arrow-icon.svg"
import Button from "../generic/button"
const Banner = () => {
    return(
        <>
        <div className="banner-box">
            <div className="banner-msg">
                Se torne um
                <span className="main-banner-msg">
                    <span style={{"color":"black"}}>{" { "}</span>Excambista<span style={{"color":"black"}}>{" }"}</span>
                </span>
            </div>
            <img className="banner-arrow-icon" src={arrow} alt="arrow" />
            <div className="banner-register-button">
                <Button>Cadastre-se</Button>
            </div>
        </div>
        </>
    )
} 

export default Banner