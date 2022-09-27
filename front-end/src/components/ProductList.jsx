import PropTypes from 'prop-types';
import { ProductCard } from './index';
import '../styles/ProductsList.css';

function ProductList({ products }) {
  localStorage.setItem('products', JSON.stringify(products));
  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
  })).isRequired,
};

export default ProductList;
