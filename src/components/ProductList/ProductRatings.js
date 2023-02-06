import * as React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

const Stars = (props) => {
  const rating = props.rating;
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star, index) => {
        const currentIndex = index + 1;
        if (currentIndex <= rating) {
          return (
            <i key={index} className="fas fa-star">
              {" "}
              <FaStar />
            </i>
          );
        }
        if (currentIndex === Math.ceil(rating)) {
          return (
            <i key={index} className="fas fa-star-half-alt">
              {" "}
              <FaStarHalfAlt />
            </i>
          );
        }
        return (
          <i key={index} className="icon-star-empty">
            {" "}
            <FaRegStar/>
          </i>
        );
      })}
    </div>
  );
};

export default Stars;
