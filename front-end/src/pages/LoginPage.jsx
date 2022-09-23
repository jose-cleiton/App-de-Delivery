import '../styles/LoginPage.css';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RockGlassImage from '../images/rockGlass.svg';
import { getErrorOnLogin, getUser, setResetUser } from '../store';
import { fetchUserLogin } from '../store/actions';

function LoginPage() {
  const dispatch = useDispatch();
  const error = useSelector(getErrorOnLogin);
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const { handleSubmit, register, formState } = useForm({
    context: 'login',
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const redirectToCostumerProducts = () => {
    if (user.token) {
      switch (user.role) {
      case 'admin':
        navigate('/admin/manager');
        break;
      case 'seller':
        navigate('/seller/products');
        break;
      default:
        navigate('/customer/products');
      }
    }
  };

  const onSubmit = (data) => {
    dispatch(fetchUserLogin(data));
  };

  const resetUser = () => {
    dispatch(setResetUser());
  };

  useEffect(resetUser, []);
  useEffect(redirectToCostumerProducts, [user.token]);

  return (
    <section className="login">
      <div>
        <img src={ RockGlassImage } alt="logo" className="logo" />
        <h1>Zé Biritis Delivery</h1>
      </div>
      <form onSubmit={ handleSubmit(onSubmit) } className="loginForm">
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
            id="email"
            type="email"
            name="email"
            className="email"
            placeholder="email@trybeer.com"
            { ...register('email', {
              pattern: /[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              required: true,
            }) }
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            data-testid="common_login__input-password"
            id="password"
            type="password"
            name="password"
            className="pass"
            placeholder="*******"
            { ...register('password', { minLength: 6, required: true }) }
          />
        </label>

        <button
          data-testid="common_login__button-login"
          type="submit"
          className="loginButton"
          disabled={ !formState.isValid }
        >
          LOGIN
        </button>

        <button
          data-testid="common_login__button-register"
          type="button"
          className="registerButton"
          onClick={ () => {
            navigate('/register');
          } }
        >
          Não tenho conta
        </button>

      </form>
      <div>
        { error
          && <p data-testid="common_login__element-invalid-email">{ error }</p> }
      </div>
    </section>
  );
}

export default LoginPage;
