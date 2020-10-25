import React from "react";
import { cardInfo } from "../components/data";
import "../components/cardStyle.css";

const Card = () => {
  return (
    <>
      <div className="container">
        {cardInfo.map((data, key) => {
          return (
            <div key={key} className="card">
              <img src={data.image} alt="" />
              <p>{data.title}</p>
          <p>{data.priceWas}</p>
              <p>{data.priceNow}</p>
              <p>{`${data.priceWas - data.priceNow}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
