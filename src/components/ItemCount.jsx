import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && count <= stock) {
      onAdd(count);
      setCount(initial);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button
          className="btn btn-outline-secondary"
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          <i className="fas fa-minus"></i>
        </button>
        <span className="item-count-number">{count}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <button
        className="btn btn-primary w-100 mt-3"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;
