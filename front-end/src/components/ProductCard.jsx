import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { obterCarrinho } from '../store/carrinho/carrinho.slice';
import { utualizarCarrinho } from '../store';
import '../styles/ProductCard.css';

function changeQuantity(event, id, carrinho) {
  const tipo = event.target.id;
  const aux = JSON.parse(JSON.stringify(carrinho));
  if (tipo === 'increment') {
    aux.map((e) => {
      if (e.id === id) {
        e.quantity += 1;
        return e;
      }
      return e;
    });
  }
  if (tipo === 'decrement') {
    aux.map((e) => {
      if (e.id === id && e.quantity > 0) {
        e.quantity -= 1;
        return e;
      }
      return e;
    });
  }
  localStorage.setItem('carrinho', JSON.stringify(aux));
  return aux;
}

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, name, urlImage, price } = product;
  const carrinho = useSelector(obterCarrinho);
  const auxCarrinho = [...carrinho];
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
            onClick={ (event) => {
              const change = changeQuantity(event, id, auxCarrinho);
              dispatch(utualizarCarrinho(change));
            } }
          >
            -
          </button>

          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            id="quantity"
            className="quantity"
            type="number"
            value={ carrinho.find((e) => e.id === product.id).quantity }
            min={ 0 }
            readOnly
          />

          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            id="increment"
            type="button"
            className="increment"
            onClick={ (event) => {
              const change = changeQuantity(event, id, auxCarrinho);
              dispatch(utualizarCarrinho(change));
            } }
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
