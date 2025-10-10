import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ItemList from './ItemList';
import products from '../data/products';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Simulamos una llamada a una API con Promise
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });

    getProducts
      .then((data) => {
        if (categoryId) {
          const filtered = data.filter(product => product.category === categoryId);
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(data);
        }
      })
      .catch(error => {
        console.error('Error cargando productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">{greeting}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
