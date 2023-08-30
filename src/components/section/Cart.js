import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return (
        <>
          <Link to={`/`}>
            <button className=" bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 m-10 border border-gray-400 focus:outline-none text-xl">
              <IoIosArrowBack />
            </button>
          </Link>
          <h2 style={{ textAlign: "center" }}>The Cart is Empty</h2>
        </>
      );
    } else {
      return (
        <div>
          <Link to={`/`}>
            <button className=" bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 m-10 border border-gray-400 focus:outline-none text-xl">
              <IoIosArrowBack />
            </button>
          </Link>
          {cart.map((item) => (
            <div
              key={item._id}
              className=" bg-white justify-center m-5 mx-0  sm:mx-0 md:mx-0 lg:mx-0 xl:mx-40  border"
            >
              <div className="flex flex-wrap">
                <div>
                  <img src={item.src} alt={item.title} className="" />
                </div>
                <div className=" m-5">
                  <p className="text-gray-600 pb-1">{item.company}</p>
                  <h5 className="text-xl font-bold pb-3">{item.title}</h5>
                  <p>SAR {item.price} </p>

                  <div className="custom-number-input h-auto w-32 pt-10">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none focus:outline-none"
                        onClick={() => reduction(item._id)}
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <p className="appearance-none m-0 outline-none focus:outline-none text-center w-auto bg-gray-300 font-semibold text-md hover:text-black focus:text-black  flex items-center text-gray-700">
                        {item.count}
                      </p>
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer focus:outline-none"
                        onClick={() => increase(item._id)}
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>

                    <button
                      className="text-gray-900 leading-none"
                      onClick={() => removeProduct(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center text-xl pb-10 font-bold">
            <h3>Total: SAR {total}</h3>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
