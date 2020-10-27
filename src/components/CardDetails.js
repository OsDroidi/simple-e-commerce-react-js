import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardInfo } from "../components/cardInfo";

const CardDetails = () => {
  const { productId } = useParams();
  const thisProduct = cardInfo.find((data) => data.id === productId);

  return (
    <>
      <Link to={`/`}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-5 border border-gray-400 focus:outline-none ">
          Back
        </button>
      </Link>
      <div className="flex flex-wrap justify-center">
        <div>
          <img
            src={thisProduct.image}
            alt={thisProduct.title}
            className="p-10 bg-white"
          />
        </div>
        <div className="p-10 m-5">
          <p className="text-gray-600 pb-1">{thisProduct.company}</p>
          <h5 className="text-xl font-bold pb-3">{thisProduct.title}</h5>
          <ul className="pb-5">
            <li className="inline-block bg-orange-500 px-2 py-1 text-sm font-semibold text-white mr-2">
              {thisProduct.rate}
            </li>
            <li className="inline-block text-gray-600">{`(${thisProduct.reviews} reviews)`}</li>
          </ul>

          <div
            className="pb-1 pt-1"
            style={{
              display: thisProduct.priceWas !== 0 ? "inline" : "none",
            }}
          >
            <span className="text-gray-600 pr-5 text-xs">Was: </span>
            <span className="line-through text-sm text-gray-500">
              AED {thisProduct.priceWas}
            </span>
          </div>
          <div className="pb-2 pt-2">
            <span
              className="text-gray-600 pr-5 pb-5 pt-5 text-xs"
              style={{
                display: thisProduct.priceWas !== 0 ? "block-inline" : "none",
              }}
            >
              Now:{" "}
            </span>
            <span className="text-xl font-bold">
              AED {thisProduct.priceNow}{" "}
            </span>
            <span className="text-gray-500 pr-5 pb-5 pt-5 text-xs align-text-top">
              (Inclusive of VAT)
            </span>
          </div>

          <div
            style={{
              display: thisProduct.priceWas !== 0 ? "block-inline" : "none",
            }}
          >
            <span className="text-gray-600 pr-5 pb-5 pt-5 text-xs">
              Saving:{" "}
            </span>{" "}
            <span className="font-bold text-sm">
              {`AED ${thisProduct.priceWas - thisProduct.priceNow}`}{" "}
            </span>
          </div>
          <div className="pt-8">
            <p className="text-gray-500 pb-2">Quantity</p>
            <select className=" block-inline  border border-gray-500 text-gray-800 py-3 px-4  mr-2 mb-2 focus:outline-none focus:bg-white focus:border-gray-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="w-56  bg-blue-500 hover:bg-blue-400 text-white font-bold  block-inline   border border-blue-500 py-3 px-4 pr-8  focus:outline-none ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
