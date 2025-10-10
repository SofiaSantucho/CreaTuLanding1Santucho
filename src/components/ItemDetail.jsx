import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center my-5">
      <h3>Producto no encontrado</h3>
      <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
    </div>;
  }

  const handleAddToCart = (quantity) => {
    // Add the product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const imageUrl = `${import.meta.env.BASE_URL}${product.image}`;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="img-fluid rounded"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
            onError={(e) => {
              e.target.src = `${import.meta.env.BASE_URL}images/placeholder.jpg`;
            }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Categoría: {product.category}</p>
          <p className="h4 text-primary my-3">${product.price.toLocaleString()}</p>
          <p className="lead">{product.description}</p>
          
          <ItemCount 
            stock={product.stock || 10} 
            initial={1} 
            onAdd={handleAddToCart}
          />
          
          <Link to="/" className="btn btn-outline-secondary w-100 mt-2">
            Seguir comprando
          </Link>
          
          {product.stock > 0 ? (
            <p className="text-success mt-3">
              <i className="fas fa-check-circle me-2"></i>
              {product.stock} unidades disponibles
            </p>
          ) : (
            <p className="text-danger mt-3">
              <i className="fas fa-times-circle me-2"></i>
              Sin stock disponible
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
