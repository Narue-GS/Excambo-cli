import "./home.css";
import arrow from "../static/arrow-icon.svg"
import Button from "../generic/button"
import { Link } from "react-router-dom";
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
                <Button><Link to={"cadastro"}><span className="register-redirect-button">Cadastre-se</span></Link></Button>
            </div>
        </div>
        </>
    )
} 

export default Banner