import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import BurgerBtn from "../../assets/images/logoMenuBurger.png";

function BurgerMenu() {
  const defaultStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#611959",
    },
    bmBurgerBarsHover: {
      background: "#611959",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#ffcc1b",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden !important",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "block",
    },
    bmOverlay: {
      background: "none",
    },
  };

  return (
    <div className="buttonContainer">
      <Menu
        customBurgerIcon={<img src={BurgerBtn} alt="burger menu" />}
        className="my-menu"
        styles={defaultStyle}
      >
        <Link to="/informations">Enregistrer un téléphone</Link>
        <Link to="/stockage">Voir les stocks disponibles</Link>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
