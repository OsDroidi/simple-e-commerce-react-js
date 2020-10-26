import React from "react";
import { useParams, Link } from "react-router-dom";
import cardInfo from "../components/cardInfo";


const CardDetails = () => {
  const { productId } = useParams();
  const thisProduct = cardInfo.find((data) => data.id === productId);

  return (
    <>
      <Link to={`/`}>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-5 border border-gray-400 focus:outline-none ">
          Back
        </button>
      </Link>
      <div className="flex flex-wrap justify-center">
        <div>
          <img src={thisProduct.image} alt="" className="image bg-white" />
        </div>
        <div className="p-10 m-5">
          <p className="text-gray-600 pb-1">{thisProduct.company}</p>
          <h5 className="text-xl font-bold pb-3">{thisProduct.title}</h5>
          <div className="pb-1 pt-1">
            <span className="text-gray-600 pr-5 ">Was: </span>
            <span className="line-through text-sm">
              AED {thisProduct.priceWas}
            </span>
          </div>
          <div className="pb-1">
            <span className="text-gray-600 pr-5 pb-5 pt-5">Now: </span>
            <span className="text-xl font-bold">
              AED {thisProduct.priceNow}{" "}
            </span>
            <span className="text-gray-600 pr-5 pb-5 pt-5">
              (Inclusive of VAT)
            </span>
          </div>

          <div
            style={{ display: thisProduct.priceWas !== 0 ? "inline" : "none" }}
          >
            <span className="text-gray-600 pr-5 pb-5 pt-5 ">Saving: </span>{" "}
            <span className="font-bold text-sm">
              {`AED ${thisProduct.priceWas - thisProduct.priceNow}`}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
