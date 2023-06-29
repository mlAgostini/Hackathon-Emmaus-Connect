import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogingContext } from "../../contexts/LogingContext";
import "./LoginHome.scss";

export default function LoginHome() {
  const navigate = useNavigate();
  const { loging } = useContext(LogingContext);

  const redirection = () => {
    navigate("/information");
  };

  const validate = () => {
    loging();
    redirection();
  };

  return (
    <div className="container-login">
      <div className="title-connexion">
        <h1>SE CONNECTER</h1>
      </div>
      <div className="input-connexion">
        <form className="login-form">
          <div className="input-identification">
            <input
              type="text"
              placeholder="exemple : tessafondeur ..."
              size={40}
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              placeholder="exemple : Pipou54 ..."
              size={40}
            />
          </div>

          <button type="submit" onClick={validate}>
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
