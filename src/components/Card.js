import React, { Component } from "react";
import cardInfo from "../components/cardInfo";
import { Link } from "react-router-dom";

class App extends Component {
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
            className="bg-white p-8 m-2 w-full sm:w-1/3  md:w-1/4  lg:w-1/5  xl:w-1/5"
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
        <div className="flex p-10 ">
          <input
            className="w-full shadow rounded p-5 focus:outline-none "
            type="text"
            placeholder="Enter item to be searched"
            onChange={(e) => this.searchSpace(e)}
          />
        </div>

        <div className="flex flex-wrap justify-center">{items}</div>
      </>
    );
  }
}

export default App;
