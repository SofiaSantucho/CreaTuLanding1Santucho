import { Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useCart } from '../context/cart-context';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  // Format price function
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <i className="fas fa-shopping-cart fa-4x mb-3 text-muted"></i>
        <h2>Tu carrito está vacío</h2>
        <p className="lead mb-4">Añade algunos productos para mascotas a tu carrito</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <i className="fas fa-paw me-2"></i>
          Ver productos
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Tu Carrito de Compras</h1>
      
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-end">Precio</th>
                    <th className="text-end">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="cart-item-image me-3" style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <img 
                              src={item.image} 
                              alt={item.name}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <small className="text-muted">{item.category}</small>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex justify-content-center">
                          <input 
                            type="number" 
                            min="1" 
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="form-control form-control-sm"
                            style={{ width: '70px' }}
                          />
                        </div>
                      </td>
                      <td className="text-end align-middle">
                        {formatPrice(item.price)}
                      </td>
                      <td className="text-end align-middle">
                        {formatPrice(item.price * item.quantity)}
                      </td>
                      <td className="text-end align-middle">
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          title="Eliminar"
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <h5 className="mb-4">Resumen del Pedido</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Productos ({totalItems})</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <span>Envío</span>
                <span className="text-success">Gratis</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5>{formatPrice(totalPrice)}</h5>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100 mb-2"
                onClick={() => alert('¡Gracias por tu compra!')}
              >
                Proceder al pago
              </Button>
              
              <Link to="/" className="btn btn-outline-secondary w-100">
                Seguir comprando
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
