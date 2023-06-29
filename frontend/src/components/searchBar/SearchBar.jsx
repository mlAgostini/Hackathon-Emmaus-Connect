import { useState } from "react";
import axios from "axios";
import "./SearchBar.scss";
import Recap from "../recap/Recap";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileName, setMobileName] = useState("");
  const [etat, setEtat] = useState("");
  const [price, setPrice] = useState("");
  const [memory, setMemory] = useState("");
  const [other, setOther] = useState("");
  const [ram, setRam] = useState("");
  // const [mobileModel, setMobileModel] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    if (searchTerm !== "") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/stock/${searchTerm}`)
        .then((response) => {
          const modelData = response.data[0][0]; // Access the first element of the first array

          if (modelData) {
            const { Model_name, RAM, Condition, Sell_Price, Memory, Other } =
              modelData;
            setMobileName(Model_name);
            setEtat(`${Condition}`);
            setPrice(Sell_Price);
            setMemory(Memory);
            setOther(Other);
            setRam(RAM);
          } else {
            setMobileName("Model not found");
          }
        })
        .catch((error) => {
          console.error("Not found", error);
        });
    } else {
      setMobileName(""); // Reset mobileName if searchTerm is empty
    }
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        className="inputS"
        placeholder="Search mobile phone"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="stockBtn" type="button" onClick={handleClick}>
        Go
      </button>
      <Recap
        mobileName={mobileName}
        price={price}
        etat={etat}
        memory={memory}
        other={other}
        ram={ram}
      />
    </div>
  );
}

export default SearchBar;
