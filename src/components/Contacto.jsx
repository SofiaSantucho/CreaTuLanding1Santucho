import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear el mailto con los datos del formulario
    const mailtoLink = `mailto:ariansofiasan@gmail.com?subject=Contacto desde PetShop - ${formData.nombre}&body=${encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h4 className="mb-4">¿Tienes alguna pregunta?</h4>
              <p className="text-muted mb-4">
                Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <div className="mb-4">
                <h5><i className="fas fa-envelope me-2 text-primary"></i>Email</h5>
                <p className="ms-4">
                  <a href="mailto:ariansofiasan@gmail.com" className="text-decoration-none">
                    ariansofiasan@gmail.com
                  </a>
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" className="w-100">
                  <i className="fas fa-paper-plane me-2"></i>
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <div className="text-center">
            <h5 className="mb-3">Síguenos en redes sociales</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="btn btn-outline-primary btn-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-info btn-lg">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-danger btn-lg">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
