import "./Resume.scss";
import PropTypes from "prop-types";

function Resume(props) {
  const { mobileName, brand, ram, memory, price, category, other } = props;
  return (
    <div className="resumeContainer">
      <h1 className="brand">{brand}</h1>
      <h2 className="model">{mobileName}</h2>

      <div className="resumeCategory">
        {/* <h3 className="categoryTitle">Category</h3> */}
        <span className="category">{category}</span>
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
      <div className="price_Btn">
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
export default Resume;

Resume.propTypes = {
  mobileName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // etat: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
