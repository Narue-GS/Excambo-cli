import "./home.css";
import arrow from "../static/arrow-icon.svg"
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
                <Link to={"cadastro"}><button className="register-redirect-button">Cadastre-se</button></Link>
            </div>
        </div>
        </>
    )
} 

export default Banner