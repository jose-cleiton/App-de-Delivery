import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      productInfo: product,
    };
  }

  componentDidMount() {
    const { product } = this.props;
    const productsCart = JSON.parse(localStorage.getItem('carrinho'));
    const item = productsCart.find((i) => i.id === product.id);
    this.setState({ quantity: item.quantity || 0 });
  }

  handleClick = (e, id) => {
    const { target } = e;
    const { quantity } = this.state;
    // console.log(target.id);
    const productStorage = JSON.parse(localStorage.getItem('carrinho'));
    const index = productStorage.findIndex((item) => item.id === Number(id));
    if (target.id === 'decrement' && quantity > 0) {
      this.setState({ quantity: quantity - 1 }, () => {
        productStorage[index].quantity = quantity - 1;
        localStorage.setItem('carrinho', JSON.stringify(productStorage));
      });
    } else if (target.id === 'increment') {
      this.setState({ quantity: quantity + 1 }, () => {
        productStorage[index].quantity = quantity + 1;
        localStorage.setItem('carrinho', JSON.stringify(productStorage));
      });
    }
  };

  render() {
    const { productInfo, quantity } = this.state;
    const { id, name, price, urlImage } = productInfo;
    return (
      <div>
        <div>
          <span data-testid={ `customer_products__element-card-price-${id}` }>
            { price.replace(/\./, ',') }
          </span>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ urlImage }
            width="100px"
            alt="product"
          />
          <div data-testid={ `customer_products__element-card-title-${id}` }>
            { name }
          </div>
        </div>

        <div className="quantity-container">
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            id="decrement"
            type="button"
            onClick={ (event) => this.handleClick(event, id) }
          >
            -
          </button>

          <span
            data-testid={ `customer_products__input-card-quantity-${id}` }
            id="quantity"
            type="number"
            value={ quantity }
            min={ 0 }
          >
            {' '}
            { quantity }

          </span>

          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            id="increment"
            type="button"
            onClick={ (event) => this.handleClick(event, id) }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

// export default ProductCard;
