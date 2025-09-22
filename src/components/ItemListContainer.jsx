import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useCart } from '../context/cart-context';
import './ItemListContainer.css';

const products = [
  { 
    id: 1, 
    name: 'Alimento para Perros Premium', 
    price: 25990, 
    category: 'perros', 
    image: '/images/products/perros.jpg',
    description: 'Alimento balanceado para perros adultos de todas las razas. 15kg.'
  },
  { 
    id: 2, 
    name: 'Rascador para Gatos', 
    price: 18499, 
    category: 'gatos', 
    image: '/images/products/rascador.jpg',
    description: 'Rascador de felpa con base de madera resistente.'
  },
  { 
    id: 3, 
    name: 'Pecera 20 Litros', 
    price: 34999, 
    category: 'peces', 
    image: '/images/products/pecera.jpeg',
    description: 'Pecera de vidrio con filtro y accesorios incluidos.'
  },
  { 
    id: 4, 
    name: 'Jaula para Aves Medianas', 
    price: 28999, 
    category: 'aves', 
    image: '/images/products/jaulave.jpg',
    description: 'Amplia jaula para aves medianas con comederos incluidos.'
  },
  { 
    id: 5, 
    name: 'Transportador para Mascotas', 
    price: 21999, 
    category: 'accesorios', 
    image: '/images/products/transportador.webp',
    description: 'Transportador seguro y cómodo para mascotas pequeñas.'
  },
  { 
    id: 6, 
    name: 'Cama para Gatos', 
    price: 15799, 
    category: 'gatos', 
    image: '/images/products/camagato.jpg',
    description: 'Cama suave y cómoda para gatos de todos los tamaños.'
  },
  { 
    id: 7, 
    name: 'Juguete para Mascotas', 
    price: 7899, 
    category: 'accesorios', 
    image: '/images/products/juguete.jpeg',
    description: 'Juguete interactivo para perros y gatos.'
  },
  { 
    id: 8, 
    name: 'Comedero Automático', 
    price: 32499, 
    category: 'accesorios', 
    image: '/images/products/comedero.webp',
    description: 'Dispensador automático de comida para mascotas.'
  }
];

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  // Format price function
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price / 100);
  };

  useEffect(() => {
    setLoading(true);
    
    // Simulamos una llamada a una API
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getProducts.then((data) => {
      if (categoryId) {
        const filtered = data.filter(product => product.category === categoryId);
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(data);
      }
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
    <div className="item-list-container">
      <h1 className="text-center my-4">{greeting}</h1>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <div className="product-image-container">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">
                  {product.description}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 text-primary">{formatPrice(product.price)}</h5>
                  <Button 
                    variant="primary" 
                    onClick={() => addToCart({...product, quantity: 1})}
                  >
                    <i className="fas fa-cart-plus me-2"></i>
                    Agregar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemListContainer;
