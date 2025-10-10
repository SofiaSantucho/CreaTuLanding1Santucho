import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  const imageUrl = `${import.meta.env.BASE_URL}${product.image}`;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <Col key={product.id}>
      <Card className="h-100">
        <div className="ratio ratio-4x3">
          <Card.Img 
            variant="top" 
            src={imageUrl} 
            alt={product.name}
            className="img-fluid object-fit-cover"
            onError={(e) => {
              e.target.src = `${import.meta.env.BASE_URL}images/placeholder.jpg`;
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-muted">
            {product.description}
          </Card.Text>
          <div className="mt-auto">
            <h5 className="text-primary">{formatPrice(product.price)}</h5>
            <Link to={`/item/${product.id}`}>
              <Button variant="primary" className="w-100 mt-2">
                Ver detalle
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
