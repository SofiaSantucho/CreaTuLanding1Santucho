import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './pages/CartPage';
import NotFound from './components/NotFound';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <NavBar />
          <main className="container mt-4">
            <Routes>
              <Route 
                path="/" 
                element={
                  <ItemListContainer greeting="¡Bienvenido a PetShop, todo para tus mascotas!" />
                } 
              />
              <Route 
                path="/category/:categoryId" 
                element={
                  <ItemListContainer greeting="Productos" />
                } 
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="bg-dark text-white mt-5 py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h5>PetShop</h5>
                  <p>Todo lo que necesitas para el cuidado de tus mascotas.</p>
                </div>
                <div className="col-md-4">
                  <h5>Enlaces Rápidos</h5>
                  <ul className="list-unstyled">
                    <li><a href="/" className="text-white">Inicio</a></li>
                    <li><a href="/servicios" className="text-white">Servicios</a></li>
                    <li><a href="/contacto" className="text-white">Contacto</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>Contacto</h5>
                  <p>Email: info@petshop.com<br />
                  Teléfono: (123) 456-7890</p>
                </div>
              </div>
              <div className="text-center mt-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} PetShop. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
