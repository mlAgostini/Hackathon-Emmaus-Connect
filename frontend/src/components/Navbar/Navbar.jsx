import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { LogingContext } from "../../contexts/LogingContext";
import "./Navbar.scss";
import LogoEmmaus from "../../assets/images/logoEmmaus.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navbar() {
  const matchMobile = useMediaQuery("only screen and (max-width: 750px)");
  const matchDesktop = useMediaQuery("only screen and (min-width: 750px)");

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

  if (matchMobile)
    return (
      <div className="navHeader">
        <img src={LogoEmmaus} alt="Logo Emmaus" />
        <div className="navBurger">
          <BurgerMenu />
        </div>
      </div>
    );

  if (matchDesktop)
    return (
      <div className="navHeaderPC">
        <img className="logoImg" src={LogoEmmaus} alt="Logo Emmaus" />
        <Link to="/informations">Enregistrer un téléphone</Link>
        <Link to="/stockage">Voir les stocks disponibles</Link>
        <button
          type="button"
          className="logoutBtn"
          onClick={handleLogingLogout}
        >
          Se déconnecter
        </button>
      </div>
    );
}

export default Navbar;
