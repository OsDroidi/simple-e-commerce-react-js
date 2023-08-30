import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import { Routes, Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    );
  }
}

export default Section;
