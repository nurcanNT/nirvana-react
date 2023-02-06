import { useEffect, useState } from "react";
import Axios from "axios";
import { FaHeart, FaShare, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ProductRatings from "../ProductList/ProductRatings";
import FavoriteButton from "../favorites/FavoriteButton";

export default function OrganicShampo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(
      " https://cheapprice.siten.co/api/amazonSearch?q=organic%20shampoo"
    )
      .then((res) => {
        console.log("res", res);
        setData(res.data.amazonProductList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("DataShampo", data);
  }, [data]);

  return (
    <div className="box-container">
      {data &&
        data.map((element, index) => {
          return (
            <section className="box" id="product">
              <div>
                <div key={index} className="box">
                  <div className="icons">
                    <FavoriteButton id={index} productData={element} />
                    <a href="#" className="fas fa-share">
                      {" "}
                      <FaShare />
                    </a>
                    <a href="#" className="fas fa-eye">
                      {" "}
                      <FaEye />
                    </a>
                  </div>
                  <img src={element.ImageUrl} alt="" />
                  <h3>{element.Title}</h3>
                  <div className="stars">
                    <ProductRatings rating={element.Rating} />
                  </div>
                  <div className="price">
                    {"$ "}
                    {element.Price} <span>{}</span>
                    <a href="#" className="btn">
                      Buy to Amazon
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
}
