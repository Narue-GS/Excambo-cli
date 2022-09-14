import "./register.css"
const RegisterForm = () => {
  return(
    <>
        <div className="register">
            <div className="register-box">
              <div className="register-box-form">
                <input className="register-box-form-name" type="text" placeholder="Seu Nome Completo"/>
                <input className="register-box-form-age" type="text" placeholder="Sua Idade"/>
                <input className="register-box-form-cpf" type="text" placeholder="Seu CPF"/>
                <input className="register-box-form-email" type="text" placeholder="Seu Email"/>
                <input className="register-box-form-email-confirm" type="text" placeholder="Confirme o Seu Email"/>
              </div>
            </div>
        </div>
    </>
  )
}

export default RegisterForm