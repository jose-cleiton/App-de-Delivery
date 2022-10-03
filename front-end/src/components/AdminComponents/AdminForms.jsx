import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCreateUserAdmin } from '../../store/actions';
import { getError } from '../../store/user/admin-newUser.slice';
import store from '../../store';

async function fetchPostUser(name, email, password, role) {
  await store.dispatch(fetchCreateUserAdmin({
    name,
    email,
    password,
    role,
  }));
}

export default function AdminForms() {
  const error = useSelector(getError);
  return (
    <div>
      <div>
        <span>
          Cadastrar novo usuário
        </span>
        <div>
          { error
          && (
            <p
              data-testid="common_login__element-invalid-email"
            >
              { error.message }

            </p>) }
        </div>
      </div>
      <form>
        <label htmlFor="userName">
          Nome
          <input
            type="text"
            id="userName"
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="userEmail">
          Email
          <input
            type="email"
            id="userEmail"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="userPassword">
          Senha
          <input
            type="password"
            id="userPassword"
            placeholder="**********"
          />
        </label>
        <label htmlFor="userRole">
          Tipo
          <select id="userRole">
            <option value="seller" selected>Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Admin</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ async () => {
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const password = document.getElementById('userPassword').value;
            const role = document.getElementById('userRole').value;
            await fetchPostUser(name, email, password, role);
          } }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
