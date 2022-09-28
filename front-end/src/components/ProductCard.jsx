import '../styles/ProductCard.css';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  getProductQuantity,
  setDecrementProduct,
  setIncrementProduct,
  setQuantityProduct,
} from '../store';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, name, urlImage, price } = product;
  const quantity = useSelector(getProductQuantity(id)) || 0;

  const increment = () => {
    dispatch(setIncrementProduct(product));
  };

  const decrement = () => {
    dispatch(setDecrementProduct(product));
  };

  const changeQuantity = ({ target }) => {
    const { value } = target;
    const inputQuantity = Number(value) || 0;
    dispatch(setQuantityProduct({ ...product, quantity: inputQuantity }));
  };

  return (
    <div className="productCard">
      <div className="upperPart">
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
          className="productPrice"
        >
          {'R$: '}
          {price.replace(/\./, ',')}
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="product"
          className="productImage"
        />
      </div>
      <div className="downPart">
        <div data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </div>

        <div className="quantity-container">
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            id="decrement"
            className="decrement"
            type="button"
            onClick={ decrement }
          >
            -
          </button>

          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            id="quantity"
            className="quantity"
            value={ quantity }
            onChange={ changeQuantity }
            min={ 0 }
          />

          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            id="increment"
            type="button"
            className="increment"
            onClick={ increment }
          >
            +
          </button>
        </div>

      </div>
    </div>

  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
