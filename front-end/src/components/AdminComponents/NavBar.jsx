import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/NavBarAdmin.css';
import { getUser, setResetUser, clearCart } from '../../store';

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logOut = () => {
    dispatch(setResetUser());
  };

  return (
    <nav className="navBar">
      <div className="produtosLink">
        <div
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="adminTitle"
        >
          GERENCIAR USUÁRIOS
        </div>
      </div>
      <div className="pedidosLink">
        <div
          className="Link"
        />
      </div>
      <div className="userDiv">
        <span
          className="AdminName"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name || 'Nome do Usuário'}
        </span>
      </div>
      <div className="sairLink">
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          onClick={ () => {
            logOut();
            localStorage.clear();
            dispatch(clearCart());
          } }
          className="Link"
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
