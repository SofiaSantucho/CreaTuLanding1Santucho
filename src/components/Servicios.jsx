import { Card, Row, Col, Badge } from 'react-bootstrap';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: 'Veterinaria',
      icono: 'fa-stethoscope',
      descripcion: 'Atención veterinaria profesional para tus mascotas. Consultas, vacunación y tratamientos.',
      precio: 'Desde $5.000',
      caracteristicas: ['Consultas generales', 'Vacunación', 'Desparasitación', 'Urgencias']
    },
    {
      id: 2,
      titulo: 'Peluquería Canina',
      icono: 'fa-cut',
      descripcion: 'Servicio completo de estética y cuidado para tu perro. Baño, corte y más.',
      precio: 'Desde $8.000',
      caracteristicas: ['Baño completo', 'Corte de pelo', 'Corte de uñas', 'Limpieza de oídos']
    },
    {
      id: 3,
      titulo: 'Guardería',
      icono: 'fa-home',
      descripcion: 'Cuidado diario para tu mascota mientras trabajas. Ambiente seguro y divertido.',
      precio: '$3.500/día',
      caracteristicas: ['Supervisión 24/7', 'Alimentación incluida', 'Juegos y ejercicio', 'Cámaras en vivo']
    },
    {
      id: 4,
      titulo: 'Adiestramiento',
      icono: 'fa-graduation-cap',
      descripcion: 'Entrenamiento profesional para perros de todas las edades y razas.',
      precio: 'Desde $12.000',
      caracteristicas: ['Obediencia básica', 'Socialización', 'Corrección de conductas', 'Clases grupales']
    },
    {
      id: 5,
      titulo: 'Hotel para Mascotas',
      icono: 'fa-bed',
      descripcion: 'Hospedaje cómodo y seguro para tu mascota cuando estés de viaje.',
      precio: '$4.500/noche',
      caracteristicas: ['Habitaciones privadas', 'Paseos diarios', 'Alimentación premium', 'Atención personalizada']
    },
    {
      id: 6,
      titulo: 'Spa y Relajación',
      icono: 'fa-spa',
      descripcion: 'Tratamientos de spa para consentir a tu mascota. Masajes y aromaterapia.',
      precio: 'Desde $6.000',
      caracteristicas: ['Masajes relajantes', 'Aromaterapia', 'Hidratación de piel', 'Tratamientos especiales']
    }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 mb-3">Nuestros Servicios</h2>
        <p className="lead text-muted">
          Ofrecemos una amplia gama de servicios profesionales para el cuidado integral de tu mascota
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {servicios.map((servicio) => (
          <Col key={servicio.id}>
            <Card className="h-100 shadow-sm hover-shadow transition">
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-3">
                  <div 
                    className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className={`fas ${servicio.icono} fa-2x text-primary`}></i>
                  </div>
                </div>
                
                <Card.Title className="text-center mb-3">
                  {servicio.titulo}
                </Card.Title>
                
                <Card.Text className="text-muted text-center mb-3">
                  {servicio.descripcion}
                </Card.Text>

                <div className="mb-3">
                  <h5 className="text-primary text-center mb-3">{servicio.precio}</h5>
                  <ul className="list-unstyled">
                    {servicio.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto text-center">
                  <Badge bg="primary" className="px-3 py-2">
                    <i className="fas fa-phone me-2"></i>
                    Consultar disponibilidad
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5 p-4 bg-light rounded">
        <h4 className="mb-3">¿Necesitas más información?</h4>
        <p className="text-muted mb-3">
          Contáctanos para conocer más detalles sobre nuestros servicios y agendar una cita
        </p>
        <a href="/contacto" className="btn btn-primary btn-lg">
          <i className="fas fa-envelope me-2"></i>
          Contactar
        </a>
      </div>
    </div>
  );
};

export default Servicios;
