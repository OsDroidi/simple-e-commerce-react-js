import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
      </section>
    );
  }
}

export default Section;
