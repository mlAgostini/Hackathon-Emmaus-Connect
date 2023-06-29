import { useNavigate } from "react-router-dom";
import "./LoginHome.scss";

export default function LoginHome() {
  const navigate = useNavigate();

  const redirection = () => {
    navigate("/informations");
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

          <button type="submit" onClick={redirection}>
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
