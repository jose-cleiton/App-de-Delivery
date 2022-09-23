import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserRegister, getErrorOnLogin, setClearError } from '../store';

function Register() {
  const dispatch = useDispatch();
  const error = useSelector(getErrorOnLogin);

  const { handleSubmit, register, formState, watch } = useForm({
    context: 'register',
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(fetchUserRegister(data));
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
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="name"
            className="name-input"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            { ...register('name', { min: 12, required: true }) }
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
            { ...register('password', { minLength: 6, required: true }) }
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
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

export default Register;
