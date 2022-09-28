import { useSelector } from 'react-redux';

import { OrderDetailsStatus, OrderDetailsTable } from '../../components';
import store from '../../store';
import { fetchLoaderOrderDetails } from '../../store/actions';
import { getTotalPriceOrderDetails } from '../../store/order/order.slice';

export async function loaderOderDetails({ params }) {
  const { payload } = await store.dispatch(fetchLoaderOrderDetails(params.id));
  return payload;
}

function OrderDetailsPage() {
  const totalOrderPrice = useSelector(getTotalPriceOrderDetails);

  return (
    <div>
      <OrderDetailsStatus />
      <OrderDetailsTable />
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$:
        {totalOrderPrice}
      </span>
    </div>
  );
}

export default OrderDetailsPage;
