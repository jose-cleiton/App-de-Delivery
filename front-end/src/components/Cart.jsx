import React, { Component } from 'react';

export default class Cart extends Component {
  /*   componentDidMount() {
      this.getTotalPrice();
    } */

  /*   getTotalPrice = () => {
      const cart = JSON.parse(localStorage.getItem('carrinho'));
      const cartFiltered = cart.filter((item) => item.quantity);
      const totalPrice = cartFiltered
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      this.setState({ totalPrice });
    }; */

  render() {
    return (
      <div>
        preço total
      </div>
    );
  }
}
