import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Stockage.scss";

export default function Stockage() {
  return (
    <div className="stockContainer">
      <h1 className="stockTitle">Stock</h1>
      <h2 className="inputTitle">Rechercher</h2>
      <SearchBar />
    </div>
  );
}
