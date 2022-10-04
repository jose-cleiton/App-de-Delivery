import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/FormsAdmin.css';
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

function DisabledBtn(name, email, password) {
  const doze = 12;
  const seis = 6;
  const emailPattern = /[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const disabled = name.length >= doze
  && emailPattern.test(email) && password.length >= seis;
  console.log(disabled);
  return !disabled;
}

export default function AdminForms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getError);
  return (
    <div className="AdminPage">
      <div>
        <span className="tableTitleAdmin">
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
      <form className="AdminRegisterForm">
        <label htmlFor="userName">
          Nome
          <input
            type="text"
            className="InputForms"
            data-testid="admin_manage__input-name"
            onChange={ (e) => setName(e.target.value) }
            id="userName"
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="userEmail">
          Email
          <input
            type="email"
            className="InputForms"
            data-testid="admin_manage__input-email"
            onChange={ (e) => setEmail(e.target.value) }
            id="userEmail"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="userPassword">
          Senha
          <input
            type="password"
            className="InputForms"
            data-testid="admin_manage__input-password"
            onChange={ (e) => setPassword(e.target.value) }
            id="userPassword"
            placeholder="**********"
          />
        </label>
        <label htmlFor="userRole">
          Tipo
          <select
            id="userRole"
            className="InputForms"
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
          className="AdminRegisterButton"
          disabled={ DisabledBtn(name, email, password) }
          onClick={ async () => {
            const role = document.getElementById('userRole').value;
            await fetchPostUser(name, email, password, role);
            await loaderUsersPage();
          } }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
