import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser, setResetUser } from '../store';

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logOut = () => {
    dispatch(setResetUser());
  };

  return (
    <nav>
      <div>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          PRODUTOS
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name || 'Nome do Usuário'}
      </span>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ () => logOut() }
      >
        Sair
      </Link>
    </nav>
  );
}

export default NavBar;
