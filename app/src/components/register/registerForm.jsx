import "../../styles/register.css"
import React, { useState } from "react";

const RegisterForm = () => {
  const [userData, setUserData] =  useState({
    userName: "",
    userBirth: "",
    userCPF: "",
    userEmail: "",
  })

  const hendleInputName = (e) =>{
    setUserData(current => {
	   return { 
		  ...current,
		   userName: e.target.value
	   }
    })
    console.log(userData);
}

  return(
    <>
        <div className="register">
            <div className="register-box">
              <div className="register-box-form">
                <input value={userData.userName} onChange={hendleInputName}  className="register-box-form-name" type="text" placeholder="Seu Nome Completo"/>
                <input className="register-box-form-birth" type="date" placeholder="Sua Data de nascimento"/>
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
