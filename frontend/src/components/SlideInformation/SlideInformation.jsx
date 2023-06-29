import axios from "axios";
import "./SlideInformation.scss";
import React, { useState } from "react";

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

  // handle Change Information
  const handleClickInformation = (evt) => {
    setInformation({
      ...information,
      [evt.target.name]: evt.target.value,
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
          <h2 className="title-brand">MARQUE</h2>
          <div className="content-brand">
            <button
              className="btn-samsung"
              onClick={handleClickInformation}
              type="button"
            >
              Samsung
            </button>
            <button
              className="btn-huawei"
              type="button"
              onClick={handleClickInformation}
            >
              Huawei
            </button>
            <button
              className="btn-honor"
              type="button"
              onClick={handleClickInformation}
            >
              Honor
            </button>
            <button
              className="btn-xiaomi"
              type="button"
              onClick={handleClickInformation}
            >
              Xiaomi
            </button>
            <button
              className="btn-oneplus"
              type="button"
              onClick={handleClickInformation}
            >
              OnePlus
            </button>
            <button
              className="btn-motorola"
              type="button"
              onClick={handleClickInformation}
            >
              Motorola
            </button>
          </div>
          <h2 className="title-model">MODELE</h2>
          <div className="content-model">
            <label htmlFor="modele">CHOISISSEZ LE MODELE</label>
            <select name="model" id="modelChoice">
              <option value="samsunggalaxys9"> SAMSUNG GALAXY S9</option>
              <option value="samsungs10plus">SAMSUNG GALAXY S10+</option>
              <option value="samsungnote8">SAMSUNG GALAXY NOTE 8</option>
              <option value="samsungzflip4">SAMSUNG GALAXY Z FLIP 4</option>
              <option value="samsungS20"> SAMSUNG GALAXY S20</option>
              <option value="samsungA40"> SAMSUNG A40</option>
            </select>
          </div>
          <h2 className="title-brand">MARQUE</h2>
          <div className="content-state">
            <button
              className="btn-state-green"
              type="button"
              onClick={handleClickInformation}
            >
              Reconditionné
            </button>
            <button
              className="btn-state-yellow"
              type="button"
              onClick={handleClickInformation}
            >
              Reconditionnable
            </button>
            <button
              className="btn-state-orange"
              type="button"
              onClick={handleClickInformation}
            >
              Bloqué
            </button>
            <button
              className="btn-state-pink"
              type="button"
              onClick={handleClickInformation}
            >
              Réparable
            </button>
            <button
              className="btn-state-red"
              type="button"
              onClick={handleClickInformation}
            >
              Fin de Vie
            </button>
          </div>
        </div>

        <h2 className="title-brand">COMMENTAIRE</h2>
        <div className="content-state">
          <label htmlFor="state">Précisez l'état:</label>

          <textarea id="story" name="story" rows="5" cols="33">
            exemple: éclats sur l'écran, couleur rouge ...
          </textarea>
        </div>

        <h2 className="title-model">MODELE</h2>
        <div className="content-model">
          <label htmlFor="modele">CHOISISSEZ LE MODELE</label>
          <select name="model" id="modelChoice">
            <option value="samsunggalaxys9"> SAMSUNG GALAXY S9</option>
            <option value="samsungs10plus">SAMSUNG GALAXY S10+</option>
            <option value="samsungnote8">SAMSUNG GALAXY NOTE 8</option>
            <option value="samsungzflip4">SAMSUNG GALAXY Z FLIP 4</option>
            <option value="samsungS20"> SAMSUNG GALAXY S20</option>
            <option value="samsungA40"> SAMSUNG A40</option>
          </select>
        </div>

        <h2 className="title-ram">RAM</h2>
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
            className="btn-stock"
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

        <h2 className="title-stockage">STOCKAGE</h2>
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
