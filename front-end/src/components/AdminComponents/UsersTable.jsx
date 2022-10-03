import React from 'react';
import { useSelector } from 'react-redux';
import { api, obterUsuarios } from '../../store';
import loaderUsersPage from '../../helpers/loaderUsers';

const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};

export default function UsersTable() {
  const users = useSelector(obterUsuarios);
  return (
    <div>
      <table>
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
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {user.id}

              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-number-${index}` }
              >
                { user.name }

              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-number-${index}` }
              >
                { user.email }

              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-number-${index}` }
              >
                { user.role }

              </td>
              <td>
                <button
                  type="button"
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
