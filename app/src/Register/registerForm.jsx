import "./register.css"
import React, { useState } from "react";

const RegisterForm = () => {
  let [userPersonalData, setUserData] =  useState({
    userName: "",
    userAge: "",
    userCPF: "",
    userEmail: "",
  })

  const hendleInputChange = (e) =>{
    setUserData(e.target.value)
    console.log(userPersonalData);
}

  return(
    <>
        <div className="register">
            <div className="register-box">
              <div className="register-box-form">
                <input value={userPersonalData.userName} onChange={hendleInputChange}  className="register-box-form-name" type="text" placeholder="Seu Nome Completo"/>
                <input className="register-box-form-age" type="text" placeholder="Sua Idade"/>
                <input className="register-box-form-cpf" type="text" placeholder="Seu CPF"/>
                <input className="register-box-form-email" type="text" placeholder="Seu Email"/>
                <input className="register-box-form-emailConfirm" type="text" placeholder="Confirme o Seu Email"/>
              </div>
              <div className="register-box-buttom">
                <button>Próximo</button>
              </div>
            </div>
            <div className="register-background">Excambo</div>
        </div>
    </>
  )
}

export default RegisterForm