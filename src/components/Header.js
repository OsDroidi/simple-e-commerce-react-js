import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import { FaShoppingCart } from "react-icons/fa";


export class Header extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;
    return (
      <>
        
        <div className="flex justify-center pt-5">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <span>{cart.length}</span>
        </div>
      </>
    );
  }
}

export default Header;
