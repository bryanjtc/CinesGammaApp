import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Navbar className="shadow-sm d-flex flex-column p-0 m-0" expand="sm" >
      <div className={styles.navbartop}>
        <Container className="py-3 d-flex justify-content-between align-items-center">
          <>
            <Link href="/" passHref>
              <Navbar.Brand className={`text-white ${styles.logo}`}>CinesGamma</Navbar.Brand>
            </Link>
          </>
          <div className="d-flex flex-wrap flex-row gap-3 justify-content-end">
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark" >
                Panamá, Panamá
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Selecciona una ciudad</Dropdown.Item>
                <Dropdown.Item>Panamá, Panamá</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark" >
                Selecciona un cine
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="warning" className="fw-bold">
              Ver Cartelera
            </Button>
          </div>
        </Container>
      </div>
      <div className={styles.navbarlow}>
        <Container className="d-flex justify-content-between align-items-center py-2">
          <Navbar.Toggle className={styles.navdropdown} />
          <Navbar.Collapse className={styles.navbarlow}>
            <NavDropdown title="Menu" menuVariant="dark" className={styles.navdropdown}>
              <NavDropdown.Item className={styles.navdropdown}>
                <Link href="/" passHref>
                  Peliculas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.navdropdown}>
                <Link href="/tarea" passHref>
                  Cartelera
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <div className="d-flex gap-3">
            <i className={`bi bi-facebook ${styles.socialmedia}`}></i>
            <i className={`bi bi-twitter ${styles.socialmedia}`}></i>
            <i className={`bi bi-instagram ${styles.socialmedia}`}></i>
            <i className={`bi bi-youtube ${styles.socialmedia}`}></i>
          </div>
        </Container>
      </div>
    </Navbar>
  </header>
);

export default Header;
