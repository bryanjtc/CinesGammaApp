import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Navbar className="shadow-sm d-flex flex-column p-0 m-0" expand="sm">
      <div className={styles.navbartop}>
        <Container className="py-3 d-flex justify-content-between align-items-center">
          <>
            <Link href="/" passHref>
              <Navbar.Brand className={`text-white ${styles.logo}`}>CinesGamma</Navbar.Brand>
            </Link>
          </>
          <div className="d-flex flex-wrap flex-row gap-3 justify-content-end">
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark">Panamá, Panamá</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Selecciona una ciudad</Dropdown.Item>
                <Dropdown.Item>Panamá, Panamá</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="bg-light text-dark">Selecciona un cine</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Multiplaza</Dropdown.Item>
                <Dropdown.Item>Metromall</Dropdown.Item>
                <Dropdown.Item>Albrook Mall</Dropdown.Item>
                <Dropdown.Item>Altaplaza Mall</Dropdown.Item>
                <Dropdown.Item>Los Andes Mall</Dropdown.Item>
                <Dropdown.Item>Westland Mall</Dropdown.Item>
                <Dropdown.Item>Anclas Mall & Plaza</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/cartelera" passHref>
              <Button variant="warning" className="fw-bold">
                Ver Cartelera
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <div className={styles.navbarlow}>
        <Container className="d-flex justify-content-between align-items-center py-2">
          <Navbar.Toggle className={styles.navdropdown} />
          <Navbar.Collapse className={styles.navbarlow}>
            <NavDropdown title="Menu" menuVariant="dark" className={styles.navdropdown}>
              <Link href="/cines" passHref>
                <NavDropdown.Item>Cines</NavDropdown.Item>
              </Link>
              <Link href="/peliculas" passHref>
                <NavDropdown.Item>Peliculas</NavDropdown.Item>
              </Link>
              <Link href="/salas" passHref>
                <NavDropdown.Item>Salas</NavDropdown.Item>
              </Link>
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
