import React from "react";
import cardInfo from "../components/cardInfo";
import "../components/cardStyle.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="container">
        {cardInfo.map((data, key) => {
          return (
            <div key={key} className="card">
              <Link to={`/${data.id}`}>
                <img src={data.image} alt="" />
              </Link>
              <p>{data.title}</p>
              <p>AED {data.priceNow}</p>
              {/* to get the saving price */}
              {/* <p>{`${data.priceWas - data.priceNow}`}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
