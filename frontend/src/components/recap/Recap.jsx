import "./recap.scss";
import PropTypes from "prop-types";

function Recap(props) {
  const { mobileName, brand, etat, ram, memory, price, category, other } =
    props;
  return (
    <div className="recapContainer">
      <h1 className="brand">{brand}</h1>
      <h2>{mobileName}</h2>

      <div className="recapCategory">
        <span>{category}</span>
      </div>
      <div className="circles">
        <div className="recapCondition">
          <span>Etat {etat}</span>
        </div>
        <div className="recapRam">
          <span>RAM {ram}</span>
        </div>
        <div className="recapStock">
          <span>Stockage {memory}</span>
        </div>
      </div>
      <div className="priceBtn">
        <h4 className="price_title">Prix de vente</h4>
        <button type="submit" className="stockBtn">
          {price} €
        </button>
      </div>
      <span>{other}</span>
    </div>
  );
}

Recap.propTypes = {
  mobileName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  etat: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Recap;
