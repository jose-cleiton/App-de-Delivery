import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { obterCarrinho } from '../store/carrinho/carrinho.slice';
import '../styles/Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(obterCarrinho);
  console.log(cart);
  // const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const total = 0;
  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__checkout__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        className="cartButton"
        disabled={ total === 0 }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          {Number(total).toFixed(2).replace('.', ',') }
        </p>
      </button>
    </div>
  );
}
