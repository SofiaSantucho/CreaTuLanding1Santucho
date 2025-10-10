import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="container text-center my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="display-1 text-primary">404</h1>
          <h2 className="mb-4">Página no encontrada</h2>
          <p className="lead text-muted mb-4">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              <i className="fas fa-home me-2"></i>
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
