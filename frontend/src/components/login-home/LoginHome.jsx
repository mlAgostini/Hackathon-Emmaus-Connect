import "./LoginHome.scss";

export default function LoginHome() {
  return (
    <>
      <div className="container-login">
        <div className="title-connexion">
          <h1>Se Connecter</h1>
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
                type="text"
                placeholder="exemple : Pipou54 ..."
                size={40}
              />
            </div>
          </form>
        </div>
      </div>
      <button type="button">Valider</button>
    </>
  );
}
