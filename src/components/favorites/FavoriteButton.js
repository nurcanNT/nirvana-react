import React, { useState } from "react";
import { FaHeart, FaShare, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

function FavoriteButton({ id, productData }) {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites")) || {}
  );

  var isFavorited = favorite[id] != null;

  function handleClick() {
    console.log(productData);
    var getFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    isFavorited = getFavorites[id] != null;

    if (getFavorites[id] == null) {
      getFavorites[id] = JSON.stringify(productData);
    } else {
      delete getFavorites[id];
    }
    setFavorite(getFavorites);
    localStorage.setItem("favorites", JSON.stringify(getFavorites));
  }

  return (
    <button onClick={handleClick}>
      {isFavorited ? <a href="#heart" className="fa-regular fa-heart">
                      {" "}
                      <FaHeart />
                    </a> : <a href="#heart" className="fa-solid fa-heart">
                      {" "}
                      <FaHeart />
                    </a> }
    </button>
  );
}

export default FavoriteButton;


