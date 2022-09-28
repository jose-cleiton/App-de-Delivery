import React from 'react';
import { useLoaderData } from 'react-router-dom';

function OrderDetailsTable() {
  const makeTestId = (element, index) => {
    const id = `customer_checkout__element-order-table-${element}-${index}`;
    return id;
  };

  const { salesProducts } = useLoaderData();

  return (
    <table>
      <caption>Detalhes pedido</caption>

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
                data-testid={ makeTestId('item-number', index) }
              >
                {id}
              </td>
              <td
                data-testid={ makeTestId('name', index) }
              >
                {name}
              </td>
              <td
                data-testid={ makeTestId('quantity', index) }
              >
                {quantity}
              </td>
              <td
                data-testid={ makeTestId('unit-price', index) }
              >
                {price}
              </td>
              <td
                data-testid={ makeTestId('sub-total', index) }
              >
                {(price * quantity).toFixed(2)}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>

  );
}

export default OrderDetailsTable;
