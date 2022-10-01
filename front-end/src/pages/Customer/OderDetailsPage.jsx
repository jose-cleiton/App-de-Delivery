import { useSelector } from 'react-redux';
import { OrderDetailsStatus, OrderDetailsTable } from '../../components';
import store from '../../store';
import { fetchLoaderAllSellers, fetchLoaderOrderDetails } from '../../store/actions';
import { getTotalPriceOrderDetails } from '../../store/order/order.slice';
import '../../styles/OrderDetailsPage.css';

export async function loaderOderDetails({ params }) {
  await store.dispatch(fetchLoaderOrderDetails(params.id));
  await store.dispatch(fetchLoaderAllSellers());
}

function OrderDetailsPage() {
  const totalOrderPrice = useSelector(getTotalPriceOrderDetails);

  return (
    <div className="orderDetailsPage">
      <h1 className="orderDetailsTitle">Detalhes do Pedido</h1>
      <OrderDetailsStatus />
      <OrderDetailsTable />
      <span
        className="cartButton"
        data-testid="customer_order_details__element-order-total-price"
      >
        {Number(totalOrderPrice).toFixed(2).replace('.', ',')}
      </span>
    </div>
  );
}

export default OrderDetailsPage;
