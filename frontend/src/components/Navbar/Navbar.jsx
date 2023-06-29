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
        <img className="logoImgMobile" src={LogoEmmaus} alt="Logo Emmaus" />
        <div className="navBurger">
          <BurgerMenu />
        </div>
      </div>
    );

  if (matchDesktop)
    return (
      <div className="navHeaderPC">
        <img className="logoImg" src={LogoEmmaus} alt="Logo Emmaus" />
        <div className="container-links">
          <div className="link-information">
            <Link to="/information">Enregistrer un téléphone</Link>
          </div>
          <div className="link-stockage">
            <Link to="/stockage">Voir les stocks disponibles</Link>
          </div>
          <div className="link-deconnexion">
            <Link to="/" onClick={handleLogingLogout}>
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
