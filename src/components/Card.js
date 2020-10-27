import React, { Component } from "react";
import { cardInfo } from "../components/cardInfo";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = cardInfo
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.title.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white p-3 m-4 w-full sm:w-1/3  md:w-1/4  lg:w-1/5  xl:w-1/5 transition duration-200 ease-in-out hover:shadow-lg"
          >
            <Link to={`/${data.id}`}>
              <img
                className="w-auto mx-auto"
                src={data.image}
                alt={data.title}
              />
            </Link>
            <p className="pb-3">{data.title}</p>
            <p className="font-bold">
              <span className="font-normal">AED</span> {data.priceNow}{" "}
              <span
                className="font-normal line-through text-xs"
                style={{
                  display: data.priceWas !== 0 ? "inline" : "none",
                }}
              >
                {data.priceWas}
              </span>{" "}
            </p>
            {/* to get the saving price */}
            {/* <p>{`${data.priceWas - data.priceNow}`}</p> */}
          </div>
        );
      });

    return (
      <>
        <div className="flex shadow m-10">
          <input
            className="w-full  p-3 focus:outline-none "
            type="text"
            placeholder="What are you looking for?"
            onChange={(e) => this.searchSpace(e)}
            ref={(input) => {
              this.nameInput = input;
            }}
          />
          <button className="bg-white w-auto flex justify-end items-center focus:outline-none text-2xl p-4 hover:text-gray-400">
            <i className="material-icons">
              <MdSearch />
            </i>
          </button>
        </div>

        <div className="flex flex-wrap justify-center pb-5">{items}</div>
      </>
    );
  }
}

export default App;
