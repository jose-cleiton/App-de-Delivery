// import { useLoaderData } from 'react-router-dom';

import store from '../../store';
import { fetchLoaderUserOrders } from '../../store/actions';

export async function loaderUserOrdersPage() {
  const { payload } = await store.dispatch(fetchLoaderUserOrders());
  return payload;
}

function OrdersPage() {
  // const Order = useLoaderData();
  return (
    <div>
      <h1>OrdersPage</h1>
    </div>
  );
}

export default OrdersPage;
