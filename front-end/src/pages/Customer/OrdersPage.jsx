import { useLoaderData } from 'react-router-dom';

import OrderStatus from '../../components/OrderStatus';
import store from '../../store';
import { fetchLoaderUserOrders } from '../../store/actions';
import '../../styles/OrdersPage.css';

export async function loaderUserOrdersPage() {
  const { payload } = await store.dispatch(fetchLoaderUserOrders());
  return payload;
}

function OrdersPage() {
  const Order = useLoaderData();
  if (Order) {
    return (
      <div>
        <div className="pedidosDiv">
          {Order.map((order) => OrderStatus(order))}
        </div>
      </div>
    );
  }
  return (<h1>Nenhum pedido encontrado</h1>);
}

export default OrdersPage;
