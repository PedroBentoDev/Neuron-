import InputEmail from "../Components/inputEmail";
import InputPassword from "../Components/InputPassword";
import Btn from "../Components/Btn";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="img-container"></div>
        <div className="form-container">
        <a href="#">Voltar</a>
          <div className="txt-form">
            <h1>Bem Vindo de Volta!</h1>
            <p>Acesse sua conta e continue evoluindo.</p>
          </div>

          <form className="form">
            <InputEmail />
            <div className="forgot-password">
              <InputPassword />
              <a href="#">Esqueci minha senha</a>
            </div>
            <Btn />
          </form>
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
      </div>
    </>
  );
};

export default Login;
