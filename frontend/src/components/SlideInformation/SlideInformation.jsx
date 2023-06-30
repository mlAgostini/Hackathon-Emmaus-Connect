import axios from "axios";
import "./SlideInformation.scss";
import { useState, useEffect } from "react";
import Resume from "../resume/Resume";

const categories = [
  { min: -Infinity, max: 90, name: "1-HC" },
  { min: 90, max: 165, name: "2-C" },
  { min: 165, max: 255, name: "3-B" },
  { min: 255, max: 375, name: "4-A" },
  { min: 375, max: Infinity, name: "5-Premium" },
];

const calculPrice = (information) => {
  let price = 0;
  let Val_M = 0;
  let Val_S = 0;
  let solde = 0;

  // Calculate RAM
  switch (information.RAM) {
    case "2":
      Val_M = 30;
      break;
    case "4":
      Val_M = 32;
      break;
    case "6":
      Val_M = 54;
      break;
    case "8":
      Val_M = 60;
      break;
    case "12":
      Val_M = 70;
      break;
    case "16":
      Val_M = 75;
      break;
    default:
      Val_M = 0;
      break;
  }

  // Calculate memory
  switch (information.Memory) {
    case "16":
      Val_S = 31;
      break;
    case "32":
      Val_S = 45;
      break;
    case "64":
      Val_S = 66;
      break;
    case "128":
      Val_S = 70;
      break;
    case "256":
      Val_S = 78;
      break;
    case "+512":
      Val_S = 88;
      break;
    default:
      Val_S = 0;
      break;
  }

  // Calculate solde
  switch (information.Device_condition) {
    case "Fin de Vie":
      solde = -80;
      break;
    case "Réparable":
      solde = -30;
      break;
    case "Bloqué":
      solde = -10;
      break;
    case "Reconditionnable":
      solde = -5;
      break;
    case "Reconditionné":
      solde = 0;
      break;
    case "Comme neuf":
      solde = 50;
      break;
    default:
      solde = 0;
      break;
  }

  // Calculate initial price
  const initialPrice = Val_M + Val_S + solde;
  price = initialPrice >= 0 ? initialPrice : 0;

  // Apply category
  categories.forEach((category) => {
    if (price >= category.min && price < category.max) {
      price = `${price} - ${category.name}`;
    }
  });

  return price;
};

function SlideInformation() {
  // useState info
  const [information, setInformation] = useState({
    Brand: "",
    Model_name: "",
    RAM: "",
    Memory: "",
    Device_condition: "Comme neuf",

    Other: "",
    user_id: 1,
  });

  const [price, setPrice] = useState("");
  // useState user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Region: "",
  });

  const [showRecap, setShowRecap] = useState(false);
  useEffect(() => {
    setPrice(calculPrice(information));
  }, [information]);

  // get user_id
  const getUserId = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        params: { userId: user.id },
      })
      .then((res) => {
        const resultUserId = res.data[0]?.id;
        setUser({ ...user, id: resultUserId });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // handle Click Information
  const handleClickInformation = (evt) => {
    setInformation((previousInfo) => ({
      ...previousInfo,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handle Change Information textarea
  const handleChangeInformation = (evt) => {
    setInformation({
      ...information,
      Other: evt.target.value,
    });
  };
  // function change style Onclick
  const [style, setStyle] = useState("buttonNoClick");

  const changeStyleButtonClick = () => {
    setStyle("buttonClick");
  };
  // Handle Click Global
  const handleClickGlobal = (evt) => {
    handleClickInformation(evt);
    changeStyleButtonClick();
  };

  // handle Submit Information formulaire
  const handleSubmitInformation = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/model`, information)
      .then(() => {
        getUserId();
        setShowRecap(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const showRecapComponent = () => {
    return (
      <Resume
        mobileName={information.Model_name}
        brand={information.Brand}
        ram={information.RAM}
        memory={information.Memory}
        price={price}
        other={information.Other}
      />
    );
  };
  return (
    <div>
      <form className="form-information" onSubmit={handleSubmitInformation}>
        <div className="contenair-brand">
          <h2 className="title-slide">MARQUE</h2>
          <div className="content-brand">
            <button
              className={style}
              id="btn-samsung"
              type="button"
              value="samsung"
              name="Brand"
              onClick={(evt) => {
                handleClickGlobal(evt);
              }}
            >
              <a
                href="https://www.samsung.com/fr/mobile/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Samsung</span>
              </a>
            </button>
            <button
              className="buttonNoClick"
              id="btn-huawei"
              type="button"
              value="huawei"
              name="Brand"
              onClick={handleClickGlobal}
            >
              <a
                href="https://consumer.huawei.com/fr/phones/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Huawei</span>
              </a>
            </button>
            <button
              className="buttonNoClick"
              id="btn-honor"
              type="button"
              value="Honor"
              name="Brand"
              onClick={handleClickGlobal}
            >
              <a
                href="https://www.hihonor.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Honor</span>
              </a>
            </button>
            <button
              className="buttonNoClick"
              id="btn-xiaomi"
              type="button"
              value="Xiaomi"
              name="Brand"
              onClick={handleClickGlobal}
            >
              <span>Xiaomi</span>
            </button>
            <button
              className="buttonNoClick"
              id="btn-oneplus"
              type="button"
              value="OnePlus"
              name="Brand"
              onClick={handleClickGlobal}
            >
              <span>OnePlus</span>
            </button>
            <button
              className="buttonNoClick"
              id="btn-motorola"
              type="button"
              value="Motorola"
              name="Brand"
              onClick={handleClickGlobal}
            >
              <span>Motorola</span>
            </button>
          </div>
          <h2 className="title-slide">MODELE</h2>
          <div className="content-model">
            <label htmlFor="modele">CHOISISSEZ LE MODELE</label>
            <select
              value={information.Model_name}
              name="Model_name"
              id="Model_name"
              onChange={(e) =>
                setInformation({ ...information, Model_name: e.target.value })
              }
            >
              <option value="">--</option>
              <option value="samsunggalaxys9">SAMSUNG GALAXY S9</option>

              <option value="samsungs10plus">SAMSUNG GALAXY S10+</option>
              <option value="samsungnote8">SAMSUNG GALAXY NOTE 8</option>
              <option value="samsungzflip4">SAMSUNG GALAXY Z FLIP 4</option>
              <option value="samsungS20"> SAMSUNG GALAXY S20</option>
              <option value="samsungA40"> SAMSUNG A40</option>
            </select>
          </div>
          <h2 className="title-slide">ETAT</h2>
          <div className="content-state">
            <button
              id="btn-state-green"
              className="btn-state1"
              type="button"
              value="reconditionné"
              name="Device_condition"
              onClick={changeStyleButtonClick}
            >
              <span>Reconditionné</span>
            </button>
            <button
              id="btn-state-yellow"
              className="btn-state1"
              type="button"
              value="Reconditionnable"
              name="Device_condition"
              onClick={changeStyleButtonClick}
            >
              <span>Reconditionnable</span>
            </button>
            <button
              id="btn-state-orange"
              className="btn-state"
              type="button"
              value="Bloqué"
              name="Device_condition"
              onClick={changeStyleButtonClick}
            >
              <span>Bloqué</span>
            </button>
            <button
              id="btn-state-pink"
              className="btn-state"
              type="button"
              value="Réparable"
              name="Device_condition"
              onClick={changeStyleButtonClick}
            >
              <span>Réparable</span>
            </button>
            <button
              id="btn-state-red"
              className="btn-state"
              type="button"
              value="Fin de Vie"
              name="Device_condition"
              onClick={changeStyleButtonClick}
            >
              <span>Fin de Vie</span>
            </button>
          </div>
        </div>

        <h2 className="title-slide">COMMENTAIRE</h2>
        <div className="content-state">
          <textarea
            id="story"
            value={information.Other}
            defaultValue="Précisez..."
            name="story"
            rows="5"
            cols="33"
            onChange={handleChangeInformation}
          />
        </div>

        <h2 className="title-slide">RAM</h2>
        <div className="content-ram">
          <button
            className="btn-ram"
            value="2"
            name="RAM"
            onClick={handleClickGlobal}
            type="button"
          >
            2 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="4"
            name="RAM"
            onClick={handleClickGlobal}
          >
            4 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="6"
            name="RAM"
            onClick={handleClickGlobal}
          >
            6 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="8"
            name="RAM"
            onClick={handleClickGlobal}
          >
            8GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="12"
            name="RAM"
            onClick={handleClickGlobal}
          >
            12 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="16"
            name="RAM"
            onClick={handleClickGlobal}
          >
            16 GO
          </button>
        </div>

        <h2 className="title-slide">STOCKAGE</h2>
        <div className="content-stockage">
          <button
            className="btn-stock"
            value="16"
            name="Memory"
            onClick={handleClickGlobal}
            type="button"
          >
            16 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="32"
            name="Memory"
            onClick={handleClickGlobal}
          >
            32 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="64"
            name="Memory"
            onClick={handleClickGlobal}
          >
            64 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="128"
            name="Memory"
            onClick={handleClickGlobal}
          >
            128 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="256"
            name="Memory"
            onClick={handleClickGlobal}
          >
            256 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="+512"
            name="Memory"
            onClick={handleClickGlobal}
          >
            +512 GO
          </button>
        </div>

        <button className="button-submit-information" type="submit">
          <span>VALIDER</span>
        </button>
      </form>
      {showRecap && showRecapComponent()}
    </div>
  );
}

export default SlideInformation;
