import "./recap.scss";
import PropTypes from "prop-types";

function Recap(props) {
  const { mobileName, brand, ram, memory, price, category, other } = props;
  return (
    <div className="recapContainer">
      <h1 className="brand">{brand}</h1>
      <h2 className="model">{mobileName}</h2>

      <div className="recapCategory">
        {/* <h3 className="categoryTitle">Category</h3> */}
        <span>{category}</span>
      </div>
      <div className="circles">
        <div className="recapCondition">{/* <span>{etat}</span> */}</div>
        <h3 className="conditionTitle">Etat</h3>
        <div className="recapRam">
          <span>{ram}</span>
        </div>
        <h3 className="ramTitle">RAM</h3>
        <div className="recapStock">
          <span>{memory}</span>
        </div>
        <h3 className="stock_Title">Stockage</h3>
      </div>
      <div className="priceBtn">
        <h4 className="price_title">Prix de vente</h4>
        <button type="submit" className="stockBtn">
          {price} €
        </button>
      </div>
      <div className="comments">
        {" "}
        <p>
          Remarques: <span>{other}</span>
        </p>{" "}
      </div>
    </div>
  );
}

Recap.propTypes = {
  mobileName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // etat: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Recap;
