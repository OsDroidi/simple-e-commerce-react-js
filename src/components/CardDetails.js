import React from "react";
import { useParams, Link } from "react-router-dom";
import cardInfo from "../components/cardInfo";
import "../components/cardStyle.css";

const CardDetails = () => {
  const { productId } = useParams();
  const thisProduct = cardInfo.find((data) => data.id === productId);

  return (
    <>
      <Link to={`/`}>
        <button>Back</button>
      </Link>
      <div className="container">
        <div>
          <img src={thisProduct.image} alt="" className="image" />
        </div>
        <div>
          <p>{thisProduct.company}</p>
          <h3>{thisProduct.title}</h3>
          <h1>
            <span>Now: </span>AED {thisProduct.priceNow}{" "}
            <span>(Inclusive of VAT)</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
