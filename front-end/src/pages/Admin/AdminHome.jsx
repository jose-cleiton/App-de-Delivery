import React from 'react';
import NavBar from '../../components/AdminComponents/NavBar';
import AdminForms from '../../components/AdminComponents/AdminForms';
import { fetchUsers } from '../../store/actions';
import store from '../../store';

export async function loaderUsersPage() {
  const { payload } = await store.dispatch(fetchUsers());
  return payload;
}

export default function AdminHome() {
  return (
    <div>
      <NavBar />
      <AdminForms />
    </div>
  );
}
