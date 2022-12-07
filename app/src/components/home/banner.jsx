import "../../styles/home.css";
import arrow from "../../static/arrow-icon.svg"

const Banner = () => {
    const getFromBackend = async() =>{
	await fetch("http://127.0.0.1:5000/get_all_users",{
            method: "GET",
            mode:'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type':'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => (console.log(data)))
    }

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
                <button onClick={getFromBackend} className="register-button">Junte-se</button>
            </div>
        </div>
        </>
    )
}

export default Banner
