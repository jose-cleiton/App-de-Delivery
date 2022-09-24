import PropTypes from 'prop-types';

function ProductCard({ product: { id, name, price, urlImage } }) {
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
          // onClick={ }
        >
          -
        </button>

        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          id="quantity"
          type="number"
          // value={ }
          min={ 0 }
          // onChange={ }
        />

        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          id="increment"
          type="button"
          // onClick={ }
        >
          +
        </button>
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
