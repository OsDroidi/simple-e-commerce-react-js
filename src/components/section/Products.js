import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import { MdSearch } from "react-icons/md";

export class Products extends Component {
  static contextType = DataContext;

  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const { products } = this.context;

    const items = products
      // eslint-disable-next-line array-callback-return
      .filter((product) => {
        if (this.state.search == null) return product;
        else if (
          product.title.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return product;
        }
      })
      .map((product) => {
        return (
          <div
            key={product._id}
            className="bg-white p-3 m-4 w-1/3 sm:w-1/3  md:w-1/4  lg:w-1/5  xl:w-1/6 transition duration-200 ease-in-out shadow-sm hover:shadow-lg"
          >
            <Link to={`/product/${product._id}`}>
              <img
                className="w-auto mx-auto"
                src={product.src}
                alt={product.title}
              />
            </Link>
            <p className="pb-3 text-sm sm:text-base md:text-base lg:text-base xl:text-base">
              {product.title}
            </p>
            <p className="font-bold">
              <span className="font-normal text-gray-600">AED</span>{" "}
              {product.price}{" "}
              <span
                className="font-normal line-through text-xs text-gray-500 ml-1 mb-5"
                style={{
                  display: product.priceWas !== 0 ? "inline" : "none",
                }}
              >
                {`AED ${product.priceWas}`}
              </span>{" "}
            </p>
          </div>
        );
      });

    return (
      <>
        <div className="flex shadow m-10">
          <input
            className="w-full  p-3 px-8 focus:outline-none "
            type="text"
            placeholder="What are you looking for?"
            onChange={(e) => this.searchSpace(e)}
          />
          <button className="bg-white w-auto flex justify-end items-center focus:outline-none text-2xl p-4 hover:text-gray-400">
            <MdSearch />
          </button>
        </div>

        <div className="flex flex-wrap justify-center pb-5">{items}</div>
      </>
    );
  }
}

export default Products;
