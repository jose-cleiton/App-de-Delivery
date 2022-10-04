import React from 'react';
import { useSelector } from 'react-redux';
import { api, obterUsuarios } from '../../store';
import loaderUsersPage from '../../helpers/loaderUsers';
import '../../styles/AdminTable.css';

const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};

export default function UsersTable() {
  const users = useSelector(obterUsuarios);
  return (
    <div className="TableUsers">
      <table className="TableAdmin">
        <caption className="tableTitleAdmin">Lista de usuários</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user, index) => (
            <tr key={ user.id }>
              <td
                className="checkoutItem"
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {user.id}

              </td>
              <td
                className="checkoutProduct"
                data-testid={ `admin_manage__element-user-table-name-number-${index}` }
              >
                { user.name }

              </td>
              <td
                className="checkoutQuantity"
                data-testid={ `admin_manage__element-user-table-email-number-${index}` }
              >
                { user.email }

              </td>
              <td
                className="checkoutUnitPrice"
                data-testid={ `admin_manage__element-user-table-role-number-${index}` }
              >
                { user.role }

              </td>
              <td>
                <button
                  type="button"
                  className="checkoutRemoveButton"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  onClick={ async () => {
                    await deleteUser(user.id);
                    await loaderUsersPage();
                  } }
                >
                  Excluir

                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
