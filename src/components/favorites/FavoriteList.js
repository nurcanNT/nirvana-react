import { FaHeart, FaShare, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import React from "react";
import FavoriteButton from "./FavoriteButton";

function FavoriteList() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  const favoriteIds = Object.keys(favorites);

  return (
    <div>
      <div className="heart" id="heart">
        <h1 className="heading-3">
          <span>Favorites</span>
        </h1>
      </div>
      <section className="product" id="product">
        <div className="box-container">
          {favoriteIds.map((id) => {
            var productData = JSON.parse(favorites[id]);
            return (
              <section className="box" id="product">
                <div>
                  <div key={id} className="box">
                    <div className="icons">
                      <FavoriteButton id={id} productData={productData} />

                      <a href="#" className="fas fa-share">
                        {" "}
                        <FaShare />
                      </a>
                      <a href="#" className="fas fa-eye">
                        {" "}
                        <FaEye />
                      </a>
                    </div>
                    <img src={productData.ThumbImageUrl} alt="" />
                    <h3>{productData.Title}</h3>
                    <div className="price">
                      {"$ "}
                      {productData.Price}
                      <span>{}</span>
                      <a href="#" className="btn">
                        Buy on Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default FavoriteList;
