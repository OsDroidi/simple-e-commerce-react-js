import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "PlayStation 4 Slim 1TB Console - Jet Black",
        company: "Sony",
        priceWas: 1399,
        price: 989,
        reviews: 12338,
        rate: 4.3,
        src: "/images/ps4.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "2",
        title: "Ideapad Laptop With 11.6-Inch",
        company: "Lenovo",
        priceWas: 1099,
        price: 999,
        reviews: 250,
        rate: 2.5,
        src: "/images/laptop.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "3",
        title: "55-Inch Frameless 4K UHD Smart LED TV (2020)",
        company: "Sony",
        priceWas: 1999,
        price: 1328,
        reviews: 142,
        rate: 5,
        src: "/images/tv.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "4",
        title:
          "iPhone 11 Black 128GB 4G LTE (2020 - Slim Packing) - International Specs",
        company: "Apple",
        priceWas: 0,
        price: 2699,
        reviews: 525,
        rate: 3.2,
        src: "/images/iphone.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "5",
        title: "Chromebook Laptop With 14-Inch Display",
        company: "Acer",
        priceWas: 1379,
        price: 1175,
        reviews: 1487,
        rate: 4.1,
        src: "/images/chromebook.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "6",
        title: "Switch Console (Extended Battery) - Neon",
        company: "Nintendo",
        priceWas: 1799,
        price: 1177,
        reviews: 4254,
        rate: 3.8,
        src: "/images/nintendo.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "7",
        title: "Galaxy A10s Dual SIM Red 32GB 2GB RAM 4G LTE - UAE Version",
        company: "Samsung",
        priceWas: 0,
        price: 411,
        reviews: 4552,
        rate: 3.9,
        src: "/images/samsung.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "8",
        title: "T120TWS True Wireless In-Ear Headphone Black",
        company: "JBL",
        priceWas: 299,
        price: 158,
        reviews: 545445,
        rate: 5,
        src: "/images/jbl.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "9",
        title: "iPhone 12 128GB Black 5G - Middle East Version",
        company: "Apple",
        priceWas: 0,
        price: 3609,
        reviews: 3225,
        rate: 4.5,
        src: "/images/iphone12.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
      {
        _id: "10",
        title: "AirPods Pro Wireless Earphones White",
        company: "Apple",
        priceWas: 999,
        price: 750,
        reviews: 12445,
        rate: 4.8,
        src: "/images/air.jpg",
        description: "This is short description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut dui venenatis mauris ullamcorper sollicitudin. Praesent sit amet pretium tellus. Praesent sit amet imperdiet ante, et vulputate dui.",

        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      cart.forEach((item) => {
        if (item._id === id) {
          item.count += 1;
        }
      });
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
