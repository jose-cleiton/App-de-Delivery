function CheckoutPage() {
  const productsCart = JSON.parse(localStorage.getItem('carrinho'));
  const cart = productsCart.filter((item) => item.quantity > 0);
  return (
    <div>
      <h1>CheckoutPage</h1>
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Descrição
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor Unitário
            </th>
            <th>
              Sub-total
            </th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((data, index) => (
            <tr key={ index }>
              <td>
                { index }
              </td>
              <td>
                { data.name }
              </td>
              <td>
                { data.quantity }
              </td>
              <td>
                { data.price }
              </td>
              <td>
                { data.price * data.quantity }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutPage;
