import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from './styles.module.css';

const Header = () => (
  <footer className={styles.footer}>
    <Navbar className="shadow-sm d-flex flex-column p-0 m-0" expand="sm">
      <div className={styles.footertop}>
        <Container className="pb-3 pt-4 d-flex justify-content-between align-items-center">
          <div className="d-flex flex-wrap flex-column gap-1 justify-content-start">
            <h6 className="text-warning">CATÁLOGO DE PELÍCULAS</h6>
            <InputGroup>
              <FormControl
                placeholder="Busca una película"
              />
              <DropdownButton
                variant="outline-secondary"
                title=""
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className="d-flex flex-wrap flex-column gap-1 justify-content-end">
            <h6 className="text-warning">CAMBIAR DE PAÍS</h6>
            <Dropdown drop="up" variant="dark">
              <Dropdown.Toggle variant="dark" className="border border-light">
                Panamá
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {[
                  'Estados Unidos',
                  'México',
                  'India',
                  'Costa Rica',
                  'El Salvador',
                  'Guatemala',
                  'Honduras',
                  'Panamá',
                  'Perú',
                  'Chile',
                  'España',
                  'Brasil',
                  'Argentina',
                ].map((link, key) => (
                  <Dropdown.Item key={`Pais-${key}`}>
                    <p className="text-light m-0">{link}</p>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </div>
      <div className={styles.footercenter}>
        <Container>
          <Navbar className="py-5 d-flex justify-content-between align-items-start" expand="sm">
            <Navbar.Collapse>
              <Nav title="Menu" className="flex-column gap-2 w-100">
                <Nav.Item className="text-warning pb-3 border-bottom border-white">
                  CARTELERA
                </Nav.Item>
                {[
                  'Preventas',
                  'Contenido Alternativos',
                  'Próximos Estrenos',
                  'Contenido Cinépolis',
                ].map((link, key) => (
                  <Nav.Item key={`Cartelera-${key}`}>
                    <p className="text-light m-0">{link}</p>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav title="Menu" className="flex-column gap-2 px-4 w-100">
                <Nav.Item className="text-warning pb-3 border-bottom border-white">
                  ¿QUIÉNES SOMOS?
                </Nav.Item>
                {['Únete al equipo', 'Próximas Aperturas', 'Corporativo'].map((link, key) => (
                  <Nav.Item key={`QuienesSomos-${key}`}>
                    <p className="text-light m-0">{link}</p>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav className="flex-column gap-2 pe-4 w-100">
                <Nav.Item className="text-warning pb-3 border-bottom border-white">
                  LEGALES
                </Nav.Item>
                {['Términos y condiciones', 'Aviso de privacidad'].map((link, key) => (
                  <Nav.Item key={`Legales-${key}`}>
                    <p className="text-light m-0">{link}</p>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav title="Menú" className="flex-column gap-2 w-100">
                <Nav.Item className="text-warning pb-3 border-bottom border-white">
                  CONTACTO
                </Nav.Item>
                <Nav.Item className="d-flex gap-1">
                  <i className={`bi bi-envelope-fill ${styles.footericons}`}></i>
                  <p className="text-light m-0">Déjanos tus comentarios</p>
                </Nav.Item>
                <Nav.Item className="d-flex gap-1">
                  <i className={`bi bi-chat-dots-fill ${styles.footericons}`}></i>
                  <p className="text-light m-0">Chatea con los expertos</p>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <div className={styles.footerbottom}>
        <Container className="d-flex justify-content-between align-items-center py-2">
          <p className="m-0">Contenido del sitio 2021 © Derechos reservados</p>
          <p className="m-0">Desarrollado por Grupo Gamma</p>
        </Container>
      </div>
    </Navbar>
  </footer>
);

export default Header;
