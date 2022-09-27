import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { obterCarrinho } from '../store/carrinho/carrinho.slice';
import '../styles/Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(obterCarrinho);
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
      onClick={ () => navigate('/customer/checkout') }
      className="cartButton"
    >
      <div>
        {`Ver Carrinho: R$ ${Number(total).toFixed(2)}`}
      </div>
    </button>
  );
}
