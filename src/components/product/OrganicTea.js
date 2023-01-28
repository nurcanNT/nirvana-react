import { useEffect, useState } from "react";
import Axios from "axios";
import { FaHeart, FaShare, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function OrganicTea() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://cheapprice.siten.co/api/productView?category=organic-tea"
    )
      .then((res) => {
        console.log("res", res);
        setData(res.data.data.productList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("DATA:", data);
  }, [data]);

  return (
    <div>
      {data &&
        data.map((element, index) => {
          return (
            <section className="product" id="product">
              <div className="box-container">
                <div key={index} className="box">
                  <span className="discount">-33%</span>
                  <div className="icons">
                    <a href="#" className="fas fa-heart">
                      {" "}
                      <FaHeart />
                    </a>
                    <a href="#" className="fas fa-share">
                      {" "}
                      <FaShare />
                    </a>
                    <a href="#" className="fas fa-eye">
                      {" "}
                      <FaEye />
                    </a>
                  </div>
                  <img src={element.ThumbImageUrl} alt="" />
                  <h3>{element.Title}</h3>
                  <div className="stars">
                    <i className="fas fa-star">
                      {" "}
                      <FaStar />
                    </i>
                    <i className="fas fa-star">
                      {" "}
                      <FaStar />
                    </i>
                    <i className="fas fa-star">
                      {" "}
                      <FaStar />
                    </i>
                    <i className="fas fa-star">
                      {" "}
                      <FaStar />
                    </i>
                    <i className="fas fa-star-half-alt">
                      {" "}
                      <FaStarHalfAlt />
                    </i>
                  </div>
                  <div className="price">
                    {" "}
                    {element.Price} <span>{element.Rating}</span>
                    <div className="quantity">
                      <span>Quantity :</span>
                      <input type="number" min="1" max="1000" value="1" />
                      <span> /kg</span>
                    </div>
                    <a href="#" className="btn">
                      Add To Cart
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
