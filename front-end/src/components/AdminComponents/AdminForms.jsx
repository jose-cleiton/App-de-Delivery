import React from 'react';
import { useSelector } from 'react-redux';

import { fetchCreateUserAdmin } from '../../store/actions';
import { getError } from '../../store/user/admin-newUser.slice';
import loaderUsersPage from '../../helpers/loaderUsers';
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
              data-testid="admin_manage__element-invalid-register"
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
            data-testid="admin_manage__input-name"
            id="userName"
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="userEmail">
          Email
          <input
            type="email"
            data-testid="admin_manage__input-email"
            id="userEmail"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="userPassword">
          Senha
          <input
            type="password"
            data-testid="admin_manage__input-password"
            id="userPassword"
            placeholder="**********"
          />
        </label>
        <label htmlFor="userRole">
          Tipo
          <select
            id="userRole"
            data-testid="admin_manage__select-role"
          >
            <option value="seller" selected>Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Admin</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ async () => {
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const password = document.getElementById('userPassword').value;
            const role = document.getElementById('userRole').value;
            await fetchPostUser(name, email, password, role);
            await loaderUsersPage();
          } }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
