import React from 'react';
import '../styles/OrderDetailsTable.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSellerSales } from '../store';

function OrderDetailsTableSeller() {
  const params = useParams();
  const makeTestId = (element, index) => {
    const id = `seller_order_details__element-order-table-${element}-${index}`;
    return id;
  };
  const sales = useSelector(getSellerSales);

  const { salesProducts } = sales.find((item) => item.id === Number(params.id));

  return (
    <table className="detailsTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>

      <tbody>
        {
          salesProducts.map(({
            id, name, price, sales_products: { quantity },
          }, index) => (
            <tr key={ index }>
              <td
                className="checkoutItem"
                data-testid={ makeTestId('item-number', index) }
              >
                {id}
              </td>
              <td
                className="checkoutProduct"
                data-testid={ makeTestId('name', index) }
              >
                {name}
              </td>
              <td
                className="checkoutQuantity"
                data-testid={ makeTestId('quantity', index) }
              >
                {quantity}
              </td>
              <td
                className="checkoutUnitPrice"
                data-testid={ makeTestId('unit-price', index) }
              >
                {price.replace('.', ',')}
              </td>
              <td
                className="checkoutSubTotal"
                data-testid={ makeTestId('sub-total', index) }
              >
                {((price * quantity).toFixed(2)).replace('.', ',')}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>

  );
}

export default OrderDetailsTableSeller;
