import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUserLogin, getErrorOnLogin, setClearError } from '../store';

function Login() {
  const dispatch = useDispatch();
  const error = useSelector(getErrorOnLogin);
  const navigate = useNavigate();

  const { handleSubmit, register, formState, watch } = useForm({ context: 'login' });

  const onSubmit = (data) => {
    dispatch(fetchUserLogin(data));
  };

  const clearError = () => {
    const subscription = watch(() => {
      if (error) dispatch(setClearError());
    });
    return () => subscription.unsubscribe();
  };

  useEffect(clearError, [watch]);

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            id="email"
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
            type="password"
            name="password"
            id="password"
            { ...register('password', { minLength: 6, required: true }) }
          />
        </label>

        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !formState.isValid }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
          onClick={ () => navigate('/register') }
        >
          Não tenho conta
        </button>

      </form>
      <div>
        { error
          && <p data-testid="common_login__element-invalid-email">{ error }</p> }
      </div>
    </div>
  );
}

export default Login;
