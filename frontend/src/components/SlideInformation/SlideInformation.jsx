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
    Sell_Price: "",
    Condition: "",
    Other: "",
    user_id: "",
  });

  // useState user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    IsAdmin: "",
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
    setInformation({
      ...information,
      [evt.target.name]: evt.target.value,
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
  // handle Change Information textarea
  const handleChangeInformation = (evt) => {
    setInformation({
      ...information,
      Other: evt.target.value,
    });
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
              value="samsung"
              onClick={handleClickGlobal}
              type="button"
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
              onClick={handleClickGlobal}
            >
              <span>Xiaomi</span>
            </button>
            <button
              className="buttonNoClick"
              id="btn-oneplus"
              type="button"
              value="OnePlus"
              onClick={handleClickGlobal}
            >
              <span>OnePlus</span>
            </button>
            <button
              className="buttonNoClick"
              id="btn-motorola"
              type="button"
              value="Motorola"
              onClick={handleClickGlobal}
            >
              <span>Motorola</span>
            </button>
          </div>
          <h2 className="title-slide">MODELE</h2>
          <div className="content-model">
            <label htmlFor="modele">CHOISISSEZ LE MODELE</label>
            <select name="model" id="modelChoice">
              <option value="samsunggalaxys9">--</option>
              <option value="samsunggalaxys9"> SAMSUNG GALAXY S9</option>
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
              onClick={handleClickInformation}
            >
              <span>Reconditionné</span>
            </button>
            <button
              id="btn-state-yellow"
              className="btn-state1"
              type="button"
              value="Reconditionné"
              onClick={handleClickInformation}
            >
              <span>Reconditionnable</span>
            </button>
            <button
              id="btn-state-orange"
              className="btn-state"
              type="button"
              value="Bloqué"
              onClick={handleClickInformation}
            >
              <span>Bloqué</span>
            </button>
            <button
              id="btn-state-pink"
              className="btn-state"
              type="button"
              value="Réparable"
              onClick={handleClickInformation}
            >
              <span>Réparable</span>
            </button>
            <button
              id="btn-state-red"
              className="btn-state"
              type="button"
              value="Fin de Vie"
              onClick={handleClickInformation}
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
            onClick={handleClickInformation}
            type="button"
          >
            2 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            onClick={handleClickInformation}
          >
            4 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            onClick={handleClickInformation}
          >
            6 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            onClick={handleClickInformation}
          >
            8GO
          </button>
          <button
            className="btn-ram"
            type="button"
            onClick={handleClickInformation}
          >
            12 GO
          </button>
          <button
            className="btn-ram"
            type="button"
            onClick={handleClickInformation}
          >
            16 GO
          </button>
        </div>

        <h2 className="title-slide">STOCKAGE</h2>
        <div className="content-stockage">
          <button
            className="btn-stock"
            onClick={handleClickInformation}
            type="button"
          >
            16 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            onClick={handleClickInformation}
          >
            32 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            onClick={handleClickInformation}
          >
            64 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            onClick={handleClickInformation}
          >
            128 GO
          </button>
          <button
            className="btn-stock"
            type="button"
            onClick={handleClickInformation}
          >
            256 GO
          </button>
          <button
            className="btn-stock"
            type="button"
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
