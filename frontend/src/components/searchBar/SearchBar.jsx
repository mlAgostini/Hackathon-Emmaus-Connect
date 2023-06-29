import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileName, setMobileName] = useState("");
  const stockId = 1;
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/stock/:${stockId}`)
        .then((response) => {
          const {
            modelName,
            // ram,
            // memory,
            // condition,
            // other,
            // Sell_Price,
            // category
          } = response.data[1];
          setMobileName(`${modelName}`);
        })
        .catch((error) => {
          console.error("pas trouvé", error);
        });
    }, []);

    // console.log(mobileName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search mobile phone"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
      <p>{mobileName}</p>
    </form>
  );
}

export default SearchBar;
