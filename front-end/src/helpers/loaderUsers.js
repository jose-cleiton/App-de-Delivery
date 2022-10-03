import { fetchUsers } from '../store/actions';
import store from '../store';

export default async function loaderUsersPage() {
  const { payload } = await store.dispatch(fetchUsers());
  return payload;
}
