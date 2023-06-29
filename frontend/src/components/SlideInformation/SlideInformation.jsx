import axios from "axios";
import "./SlideInformation.scss";
import { useState } from "react";

function SlideInformation() {
  // useState info
  const [information, setInformation] = useState({
    Brand: "",
    Model_name: "",
    RAM: "",
    Memory: "",
    Device_condition: "Reconditionné",
    Other: "",
    user_id: 1,
  });

  // useState user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Region: "",
  });

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
  // function change style Onclick brand
  const [style, setStyle] = useState("buttonNoClick");
  // function change style brand
  const changeStyleButtonClick = () => {
    setStyle("buttonClick");
  };
  // Handle Click Global brand
  const handleClickGlobal = (evt) => {
    handleClickInformation(evt);
    changeStyleButtonClick();
  };
  // function change style Onclick state
  const [styleState, setStyleState] = useState("btn-state1");
  // function change style state
  const changeStyleButtonClickState = () => {
    setStyleState("btn-state1-click");
  };
  // function change style Onclick ram
  const [styleRam, setStyleRam] = useState("btn-ram");
  // function change style ram
  const changeStyleButtonClickRam = () => {
    setStyleRam("btn-ram-click");
  };
  // Handle Click Global ram
  const handleClickGlobalRam = (evt) => {
    handleClickInformation(evt);
    changeStyleButtonClickRam();
  };
  // function change style Onclick stock
  const [styleStock, setStyleStock] = useState("btn-stock");
  // function change style Stock
  const changeStyleButtonClickStock = () => {
    setStyleStock("btn-stock-click");
  };
  // Handle Click Global Stock
  const handleClickGlobalStock = (evt) => {
    handleClickInformation(evt);
    changeStyleButtonClickStock();
  };
  // handle Submit Information formulaire
  const handleSubmitInformation = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/model`, information)
      .then(() => {
        getUserId();
      })
      .catch((err) => {
        console.error(err);
      });
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
              className={styleState}
              type="button"
              value="reconditionné"
              name="Device_condition"
              onClick={changeStyleButtonClickState}
            >
              <span>Reconditionné</span>
            </button>
            <button
              id="btn-state-yellow"
              className="btn-state1"
              type="button"
              value="Reconditionnable"
              name="Device_condition"
              onClick={changeStyleButtonClickState}
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
            onClick={handleClickInformation}
            type="button"
          >
            2 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="4"
            name="RAM"
            onClick={handleClickInformation}
          >
            4 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="6"
            name="RAM"
            onClick={handleClickInformation}
          >
            6 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="8"
            name="RAM"
            onClick={handleClickInformation}
          >
            8GO
          </button>
          <button
            className={styleRam}
            type="button"
            value="12"
            name="RAM"
            onClick={handleClickGlobalRam}
          >
            12 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            value="16"
            name="RAM"
            onClick={handleClickInformation}
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
            onClick={handleClickInformation}
            type="button"
          >
            16 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="32"
            name="Memory"
            onClick={handleClickInformation}
          >
            32 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="64"
            name="Memory"
            onClick={handleClickInformation}
          >
            64 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="128"
            name="Memory"
            onClick={handleClickInformation}
          >
            128 GO
          </button>
          <button
            className={styleStock}
            type="button"
            value="256"
            name="Memory"
            onClick={handleClickGlobalStock}
          >
            256 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            value="+512"
            name="Memory"
            onClick={handleClickInformation}
          >
            +512 GO
          </button>
        </div>

        <button className="button-submit-information" type="submit">
          <span>VALIDER</span>
        </button>
      </form>
    </div>
  );
}

export default SlideInformation;
