import React, { Component } from "react";
import cardInfo from "../components/cardInfo";
import "../components/cardStyle.css";
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
          <div key={data.id} className="card">
            <Link to={`/${data.id}`}>
              <img src={data.image} alt="" />
            </Link>
            <p className="pb-3">{data.title}</p>
            <p className="font-bold">
              <span className="font-normal">AED</span> {data.priceNow}{" "}
              <span className="font-normal line-through text-xs">
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
