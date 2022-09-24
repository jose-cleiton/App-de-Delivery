import '../styles/RegisterPage.css';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getErrorOnLogin, getUser, setResetUser } from '../store';
import { fetchUserRegister } from '../store/actions';

function RegisterPage() {
  const dispatch = useDispatch();
  const error = useSelector(getErrorOnLogin);
  const user = useSelector(getUser);

  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({
    context: 'register',
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(fetchUserRegister(data));
  };

  const resetUser = () => {
    if (user.token) dispatch(setResetUser());
  };

  // const redirectToCostumerProducts = () => {
  //   if (user.token) navigate('/customer/products');
  // };

  useEffect(resetUser, []);
  // useEffect(redirectToCostumerProducts, [user.token]);
  if (user.token) navigate('/customer/products');

  return (
    <div>
      <h1 className="tituloCadastro">Cadastro</h1>
      <form onSubmit={ handleSubmit(onSubmit) } className="registerForm">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="name"
            className="name-input"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            // { ...register('name') }
            { ...register('name', { minLength: 12, required: true }) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            name="email"
            id="email"
            placeholder="Seu Email"
            // { ...register('email') }
            { ...register('email', {
              pattern: /[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              required: true,
            }) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            // { ...register('password') }
            { ...register('password', { minLength: 6, required: true }) }
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
          className="registerBtn"
          disabled={ !formState.isValid }
        >
          CADASTRAR
        </button>
      </form>
      <div>
        {error && (
          <p data-testid="common_register__element-invalid_register">{error}</p>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;
