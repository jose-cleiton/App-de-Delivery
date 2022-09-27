import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

import { getUser, setResetUser } from '../store';

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logOut = () => {
    dispatch(setResetUser());
  };

  return (
    <nav className="navBar">
      <div className="produtosLink">
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="Link"
        >
          PRODUTOS
        </Link>
      </div>
      <div className="pedidosLink">
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          className="Link"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="userDiv">
        <span
          className="userName"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name || 'Nome do Usuário'}
        </span>
      </div>
      <div className="sairLink">
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          onClick={ () => logOut() }
          className="Link"
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
