import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogingContext } from "../../contexts/LogingContext";
import "./Navbar.scss";
import LogoEmmaus from "../../assets/images/logoEmmaus.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navbar() {
  const navigate = useNavigate();
  const { isOnline, loging, logout } = useContext(LogingContext);

  const deconnexion = () => {
    navigate("/");
  };

  const handleLogingLogout = () => {
    if (isOnline) {
      logout();
      deconnexion();
    } else {
      loging();
    }
  };

  return (
    <div className="navHeader">
      <BurgerMenu />
      <img className="logoImg" src={LogoEmmaus} alt="Logo Emmaus" />
      <Link to="/informations">Enregistrer un téléphone</Link>
      <Link to="/stockage">Voir les stocks disponibles</Link>
      <button type="button" className="logoutBtn" onClick={handleLogingLogout}>
        Se déconnecter
      </button>
    </div>
  );
}

export default Navbar;
