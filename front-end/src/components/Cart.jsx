import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { obterCarrinho } from '../store/carrinho/carrinho.slice';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(obterCarrinho);
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <button type="button" onClick={ () => navigate('/customer/checkout') }>
      <div>
        {`Ver Carrinho: R$ ${Number(total).toFixed(2)}`}
      </div>
    </button>
  );
}
