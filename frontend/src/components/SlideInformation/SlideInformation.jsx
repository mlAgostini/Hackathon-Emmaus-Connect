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
    Device_condition: "",
    Other: "",
    user_id: 1,
  });
  // console.log(
  //   "🚀 ~ file: SlideInformation.jsx:16 ~ SlideInformation ~ information:",
  //   information
  // );

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
              className="btn-brand"
              id="btn-samsung"
              value="samsung"
              name="Brand"
              onClick={(evt) => {
                handleClickInformation(evt);
              }}
              type="button"
            >
              <span>Samsung</span>
            </button>
            <button
              className="btn-brand"
              id="btn-huawei"
              type="button"
              value="huawei"
              name="Brand"
              onClick={handleClickInformation}
            >
              <span>Huawei</span>
            </button>
            <button
              className="btn-brand"
              id="btn-honor"
              type="button"
              value="Honor"
              name="Brand"
              onClick={handleClickInformation}
            >
              <span>Honor</span>
            </button>
            <button
              className="btn-brand"
              id="btn-xiaomi"
              type="button"
              value="Xiaomi"
              name="Brand"
              onClick={handleClickInformation}
            >
              <span>Xiaomi</span>
            </button>
            <button
              className="btn-brand"
              id="btn-oneplus"
              type="button"
              value="OnePlus"
              name="Brand"
              onClick={handleClickInformation}
            >
              <span>OnePlus</span>
            </button>
            <button
              className="btn-brand"
              id="btn-motorola"
              type="button"
              value="Motorola"
              name="Brand"
              onClick={handleClickInformation}
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
              onClick={handleClickInformation}
            >
              <span>Reconditionné</span>
            </button>
            <button
              id="btn-state-yellow"
              className="btn-state1"
              type="button"
              value="Reconditionnable"
              name="Device_condition"
              onClick={handleClickInformation}
            >
              <span>Reconditionnable</span>
            </button>
            <button
              id="btn-state-orange"
              className="btn-state"
              type="button"
              value="Bloqué"
              name="Device_condition"
              onClick={handleClickInformation}
            >
              <span>Bloqué</span>
            </button>
            <button
              id="btn-state-pink"
              className="btn-state"
              type="button"
              value="Réparable"
              name="Device_condition"
              onClick={handleClickInformation}
            >
              <span>Réparable</span>
            </button>
            <button
              id="btn-state-red"
              className="btn-state"
              type="button"
              value="Fin de Vie"
              name="Device_condition"
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
            className="btn-ram"
            type="button"
            value="12"
            name="RAM"
            onClick={handleClickInformation}
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
            className="btn-stock"
            type="button"
            value="256"
            name="Memory"
            onClick={handleClickInformation}
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

/*
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [brand, setBrand] = useState("");
  const [ram, setRam] = useState("");
  const [memory, setMemory] = useState("");
  const [condition, setCondition] = useState("");
  const [sellingPrice, setSellingPrice] = useState(0);
  let Val_M = 0;
  let Val_S = 0;
  let solde = 0;

  const categories = [
    { min: -Infinity, max: 90, name: "1 - HC" },
    { min: 90, max: 165, name: "2 - C" },
    { min: 165, max: 255, name: "3 - B" },
    { min: 255, max: 375, name: "4 - A" },
    { min: 375, max: Infinity, name: "5 - Premium" }
  ];

  const calculPrice = () => {
    // Calculate RAM
    switch (ram) {
      case "1":
        Val_M = 30;
        break;
      case "2":
        Val_M = 32;
        break;
      case "3":
        Val_M = 54;
        break;
      case "4":
        Val_M = 60;
        break;
      case "6":
        Val_M = 70;
        break;
      case "8":
        Val_M = 75;
        break;
      case "12":
        Val_M = 80;
        break;
      default:
        Val_M = 0;
        break;
    }

    // Calculate memory
    switch (memory) {
      case "31":
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
      case "512":
        Val_S = 88;
        break;
      case "1000":
        Val_S = 100;
        break;
      default:
        Val_S = 0;
        break;
    }

    // Calculate solde
    switch (condition) {
      case "DEEE":
        solde = -80;
        break;
      case "reparable":
        solde = -30;
        break;
      case "bloque":
        solde = -10;
        break;
      case "reconditionable":
        solde = -5;
        break;
      case "reconditionne":
        solde = 0;
        break;
      case "comme-neuf":
        solde = 50;
        break;
      default:
        solde = 0;
        break;
    }

    // Calculate initial price
    let initialPrice = Val_M + Val_S + solde;
    let sellingPrice = initialPrice >= 0 ? initialPrice : 0;

    setSellingPrice(sellingPrice);
    console.log(sellingPrice);
    for (var i = 0; i < categories.length; i++) {
      if (
        sellingPrice >= categories[i].min &&
        sellingPrice < categories[i].max
      ) {
        console.log(categories[i].name);
      }
    }
  };

  return (
    <div className="calculator">
      <div>
        <label htmlFor="pet-select">Marque</label>
        <select
          name="etats"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          id="L'état du smartphone"
        >
          <option value="">--Please choose an option--</option>
          <option value="Apple">Apple</option>
          <option value="Oppo">Oppo</option>
          <option value="Oneplus">OnePlus</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>
      <label htmlFor="name">RAM :</label>
      <input
        type="text"
        id="ram"
        required
        minLength="4"
        maxLength="8"
        size="10"
        value={ram}
        onChange={(e) => setRam(e.target.value)}
      ></input>
      <div>
        <label htmlFor="memory">Stockage :</label>
        <input
          type="text"
          id="memory"
          name="ram"
          required
          minLength="4"
          maxLength="8"
          size="10"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        ></input>
      </div>
      <div></div>
      <label htmlFor="pet-select">L'état du smartphone</label>
      <select
        name="etats"
        id="L'état du smartphone"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="DEEE">DEEE</option>
        <option value="reparable">Reparable</option>
        <option value="bloque">Bloqué</option>
        <option value="reconditionable">Reconditionable</option>
        <option value="reconditionne">Reconditionné</option>
        <option value="comme-neuf">Comme neuf</option>
      </select>

      <div>
        <button onClick={calculPrice}>Click to see price</button>

        <span> {sellingPrice} </span>
      </div>
    </div>
  );
}
*/
