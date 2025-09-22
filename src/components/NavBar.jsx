import { Link } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import './NavBar.css';

const NavBar = () => {
  const { getTotalItems } = useCart();
  
  const petCategories = [
    { id: 'perros', name: 'Perros', icon: 'fa-dog' },
    { id: 'gatos', name: 'Gatos', icon: 'fa-cat' },
    { id: 'peces', name: 'Peces', icon: 'fa-fish' },
    { id: 'aves', name: 'Aves', icon: 'fa-dove' },
    { id: 'roedores', name: 'Roedores', icon: 'fa-otter' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-paw me-2"></i>
          <span className="fw-bold">Pet</span>Shop
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="categoriasDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Mascotas
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoriasDropdown">
                {petCategories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      className="dropdown-item" 
                      to={`/category/${category.id}`}
                    >
                      <i className={`fas ${category.icon} me-2`}></i>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link to="/carrito" className="btn btn-outline-light position-relative me-2">
              <i className="fas fa-shopping-cart"></i>
              {getTotalItems() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getTotalItems()}
                  <span className="visually-hidden">items en el carrito</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
