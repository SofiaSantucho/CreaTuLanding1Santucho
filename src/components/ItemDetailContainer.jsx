import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../data/products';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    // Simulate API call
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find(p => p.id === parseInt(itemId));
        resolve(foundProduct);
      }, 1000);
    });

    getProduct
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando producto...</p>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
