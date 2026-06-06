import InputEmail from "../Components/inputEmail";
import InputPassword from "../Components/InputPassword";
import Btn from "../Components/Btn";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="img-container"></div>
        <div className="form-container">
          <div className="txt-form">
            <h1>Bem Vindo de Volta!</h1>
            <p>Acesse sua conta e continue evoluindo.</p>
          </div>

          <form className="form">
            <InputEmail />
            <InputPassword />
            <Btn />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
