import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export function Details() {
  const context = useContext(DataContext);
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = () => {
      if (id) {
        const res = context.products;
        const data = res.filter((item) => item._id === id);
        setProduct(data);
      }
    };

    getProduct();
  }, [context.products, id]);

  const { addCart } = context;

  return (
    <>
      {product.map((item) => (
        <div key={item._id}>
          <Link to={`/`}>
            <button className="bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 m-10 border border-gray-400 focus:outline-none text-xl">
              <IoIosArrowBack />
            </button>
          </Link>
            <div className="flex flex-wrap justify-center">
              <div>
                <img
                  src={item.src}
                  alt={item.title}
                  className="p-10 bg-white border border-gray-200"
                />
              </div>
              <div className="p-10 m-5">
                <p className="text-gray-600 pb-1">{item.company}</p>
                <h5 className="text-xl font-bold pb-3">{item.title}</h5>
                <ul className="pb-5">
                  <li className="inline-block bg-orange-500 px-2 py-1 text-sm font-semibold text-white mr-2">
                    {item.rate}
                  </li>
                  <li className="inline-block text-gray-600">{`(${item.reviews} reviews)`}</li>
                </ul>

                <div
                  className="pb-1 pt-1"
                  style={{
                    display: item.priceWas !== 0 ? "inline" : "none",
                  }}
                >
                  <span className="text-gray-500 pr-5 text-xs">Was: </span>
                  <span className="line-through text-sm text-gray-500">
                    SAR {item.priceWas}
                  </span>
                </div>
                <div className="pb-2 pt-2">
                  <span
                    className="text-gray-500 pr-5 pb-5 pt-5 text-xs"
                    style={{
                      display: item.priceWas !== 0 ? "block-inline" : "none",
                    }}
                  >
                    Now:{" "}
                  </span>
                  <span className="text-xl font-bold">SAR {item.price} </span>
                  <span className="text-gray-500 pr-5 pb-5 pt-5 text-xs align-text-top">
                    (Inclusive of VAT)
                  </span>
                </div>

                <div
                  style={{
                    display: item.priceWas !== 0 ? "block-inline" : "none",
                  }}
                >
                  <span className="text-gray-500 pr-5 pb-5 pt-5 text-xs">
                    Saving:{" "}
                  </span>{" "}
                  <span className="font-bold text-sm">
                    {`SAR ${item.priceWas - item.price}`}{" "}
                  </span>
                </div>
                <div className="pt-8">
                  <Link onClick={() => addCart(item._id)}>
                    <button className="w-56  bg-blue-500 hover:bg-blue-400 text-white font-bold  block-inline   border border-blue-500 py-3 px-4 pr-8  focus:outline-none ">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      ))}
    </>
  );
}

export default Details;
