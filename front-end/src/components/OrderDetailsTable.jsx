import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../styles/OrderDetailsTable.css';

function OrderDetailsTable() {
  const makeTestId = (element, index) => {
    const id = `customer_checkout__element-order-table-${element}-${index}`;
    return id;
  };

  const { salesProducts } = useLoaderData();

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

export default OrderDetailsTable;
