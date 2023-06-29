import { slide as Menu } from "react-burger-menu";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { LogingContext } from "../../contexts/LogingContext";
import BurgerBtn from "../../assets/images/logoMenuBurger.png";
import "./BurgerMenu.scss";

function BurgerMenu() {
  const navigating = useNavigate();
  const { isOnline, loging, logout } = useContext(LogingContext);

  const deconnexion = () => {
    navigating("/");
  };

  const handleLogingLogout = () => {
    if (isOnline) {
      logout();
      deconnexion();
    } else {
      loging();
    }
  };
  const defaultStyle = {
    bmBurgerButton: {
      width: "10vw",
      height: "5vh",
    },
    bmCrossButton: {
      height: "2px",
      width: "24px",
    },
    bmCross: {
      background: "#F5F5F5",
    },
    bmMenuWrap: {
      position: "fixed",
    },
    bmMenu: {
      display: "flex",
      justifyContent: "space-around",
      height: "50%",
      background: "#021c3c",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden !important",
      marginLeft: "-30%",
    },
    bmItemList: {
      color: "#b8b7ad",
      textAlign: "center",
    },
    bmItem: {
      display: "block",
      textDecoration: "none",
      color: "#F5F5F5",
      marginTop: "20%",
    },
    bmOverlay: {
      background: "none",
    },
  };

  return (
    <div className="buttonContainer">
      <Menu
        right
        customBurgerIcon={<img src={BurgerBtn} alt="burger menu" />}
        className="my-menu"
        styles={defaultStyle}
      >
        <Link to="/information">Enregistrer un téléphone</Link>

        <Link to="/stockage">Voir les stocks disponibles</Link>

        <Link to="/" onClick={handleLogingLogout}>
          Déconnexion
        </Link>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
