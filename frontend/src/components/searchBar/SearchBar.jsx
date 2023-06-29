import { useState } from "react";
import axios from "axios";
import "./SearchBar.scss";
import Recap from "../recap/Recap";
import Error from "../Notfound/NotFound";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [mobileName, setMobileName] = useState("");
  const [etat, setEtat] = useState("");
  const [price, setPrice] = useState("");
  const [memory, setMemory] = useState("");
  const [other, setOther] = useState("");
  const [ram, setRam] = useState("");
  const [category, setCategory] = useState("");
  const [isError, setIsError] = useState(false);

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
            const {
              Brand,
              Model_name,
              Price_category,
              RAM,
              Device_condition,
              Price,
              Memory,
              Other,
            } = modelData;
            setMobileName(Model_name);
            setEtat(Device_condition);
            setBrand(Brand);
            setPrice(Price);
            setMemory(Memory);
            setCategory(Price_category);
            setOther(Other);
            setRam(RAM);
            setIsError(false);
          } else {
            setMobileName("Model not found");
            setIsError(true);
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
      {isError ? (
        <Error />
      ) : (
        <Recap
          mobileName={mobileName}
          price={price}
          etat={etat}
          memory={memory}
          other={other}
          ram={ram}
          category={category}
          brand={brand}
        />
      )}
    </div>
  );
}

export default SearchBar;
