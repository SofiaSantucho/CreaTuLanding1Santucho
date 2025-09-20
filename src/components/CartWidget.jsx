import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="btn position-relative" aria-label="Carrito de compras" style={{ color: 'white' }}>
        <i className="fas fa-shopping-basket fs-5"></i>
        {totalItems > 0 && (
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
            style={{ backgroundColor: '#ff6b6b' }}
            aria-label={`${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en el carrito`}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
