import '../styles/Cart.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { obterCarrinho } from '../store/carrinho/carrinho.slice';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(obterCarrinho);

  const total = cart?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => navigate('/customer/checkout') }
      className="cartButton"
      disabled={ total === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        {Number(total).toFixed(2).replace('.', ',') }
      </p>
    </button>
  );
}
