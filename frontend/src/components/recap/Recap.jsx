import "./recap.scss";
import PropTypes from "prop-types";

function Recap(props) {
  const { mobileName, mobileModel, category, etat, ram, memory, price, other } =
    props;
  return (
    <div className="recapContainer">
      <h1>{mobileName}</h1>
      <h2>{mobileModel}</h2>
      <div className="recapCategory">
        <span>{category}1A</span>
      </div>
      <div className="recapCondition">
        <span>Etat {etat}</span>
      </div>
      <div className="recapRam">
        <span>RAM {ram}</span>
      </div>
      <div className="recapStock">
        <span>Stockage {memory}</span>
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
  mobileModel: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  etat: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
};

export default Recap;
