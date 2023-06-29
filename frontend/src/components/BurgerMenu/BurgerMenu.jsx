import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import BurgerBtn from "../../assets/images/logoMenuBurger.png";

function BurgerMenu() {
  const defaultStyle = {
    bmBurgerButton: {
      position: "absolute",
      width: "60px",
      height: "auto",
      left: "36px",
      top: "36px",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#496374",
    },
    bmMenuWrap: {
      position: "fixed",
    },
    bmMenu: {
      display: "flex",
      justifyContent: "space-around",
      // alignItems: "center",
      background: "#ffcc1b",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden !important",
      marginTop: "-60px",
      marginLeft: "-30px",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      textAlign: "center",
    },
    bmItem: {
      display: "block",
      textDecoration: "none",
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
