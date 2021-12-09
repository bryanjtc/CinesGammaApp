import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import uniqid from 'uniqid';
import styles from './styles.module.css';

const Peliculas = () => {
  const [opcionSeleccion, setOpcionSeleccion] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [peliculas, setPeliculas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [cines, setCines] = useState([]);
  const listaPeliculas = [
    {
      id: 101,
      imagesrc: 'eternals_ox0h6z.jpg',
    },
    {
      id: 102,
      imagesrc: 'venom2_dtfxii.jpg',
    },
    {
      id: 103,
      imagesrc: 'soho_vcpsdz.jpg',
    },
    {
      id: 104,
      imagesrc: 'ron_rgijkg.jpg',
    },
    {
      id: 105,
      imagesrc: 'dune_z2iofz.jpg',
    },
    {
      id: 106,
      imagesrc: 'your-eyes-tell_imsx0v.jpg',
    },
    {
      id: 107,
      imagesrc: 'chernobyl_dkybvl.jpg',
    },
    {
      id: 108,
      imagesrc: 'dummy_o5is5o.jpg',
    },
    {
      id: 109,
      imagesrc: 'dummy_o5is5o.jpg',
    },
    {
      id: 110,
      imagesrc: 'dummy_o5is5o.jpg',
    },
  ];
  const fetchData = async () => {
    try {
      const response = await axios.get('peliculas');
      const data = await response.data;
      setPeliculas(data);
      fetchDataCines();
      fetchDataEventos();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataEventos = async () => {
    try {
      const response = await axios.get(`peliculas/eventos`);
      const data = await response.data;
      setEventos(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataCines = async () => {
    try {
      const response = await axios.get('peliculas/cines');
      const data = await response.data;
      setCines(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchNoCal = async () => {
    try {
      const response = await axios.get('peliculas/nocal');
      const data = await response.data;
      setPeliculas(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchNoSala = async () => {
    try {
      const response = await axios.get('peliculas/nosala');
      const data = await response.data;
      setPeliculas(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const getNewData = (opcion) => {
    if (opcion === 'Todas') fetchData();
    if (opcion === 'Proyectadas en sala, sin calificar') fetchNoCal();
    if (opcion === 'No proyectadas en sala') fetchNoSala();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={`w-100 my-5 ${styles.Peliculas}`}>
      <Head>
        <title>Peliculas</title>
      </Head>
      <Container>
        <div className="maintop mb-5 d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">Peliculas</h1>
          <div className="maintopright d-flex flex-row-reverse align-items-end gap-3">
            <Button variant="outline-primary">Nueva Sucursal</Button>
            <div className="options">
              <DropdownButton id="dropdown-basic-button" title={opcionSeleccion}>
                {['Todas', 'Proyectadas en sala, sin calificar', 'No proyectadas en sala'].map(
                  (opcion) => (
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        setOpcionSeleccion(opcion);
                        getNewData(opcion);
                      }}
                      key={opcion}
                    >
                      {opcion}
                    </Dropdown.Item>
                  ),
                )}
              </DropdownButton>
            </div>
          </div>
        </div>
        {loading ? (
          <p>
            <em>Loading...</em>
          </p>
        ) : (
          <section className="listapeliculas">
            {cines.map((cine) => (
              <div key={uniqid()}>
                <h5 className="fw-bold mb-3 mt-5">{cine.nombre}</h5>
                <div className="d-flex flex-wrap gap-5">
                  {eventos.map(
                    (evento) =>
                      evento.id_cine === cine.id_cine && (
                        <div className="d-flex" key={uniqid()}>
                          {peliculas.map(
                            (pelicula) =>
                              pelicula.id_contenido === evento.id_contenido && (
                                <Card className={styles.tarjeta} key={uniqid()}>
                                  {listaPeliculas.map(
                                    (imagen) =>
                                      pelicula.id_contenido === imagen.id && (
                                        <Card.Img
                                          as={Image}
                                          width="367px"
                                          height="551px"
                                          src={imagen.imagesrc}
                                          variant="top"
                                          key={uniqid()}
                                        />
                                      ),
                                  )}
                                  <Card.Body className="m-3 mb-0 pb-0">
                                    <Card.Title className="fw-bold">{pelicula.titulo}</Card.Title>
                                    <Card.Text className="text-primary fw-bold">
                                      {pelicula.director}
                                    </Card.Text>
                                    <Card.Text className="pb-3">{pelicula.año}</Card.Text>
                                    <div className="container">
                                      <div className="row">
                                        <Card.Text className="col ps-0">ID</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.id_contenido}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Puntuacion</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.calificacion}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Duracion</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.duracion}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Genero</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.genero}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Distribuidora</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.distribuidora}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Fecha de estreno</Card.Text>
                                        <Card.Text className="col pe-0">
                                          {pelicula.fecha_estreno.replace('T00:00:00', '')}
                                        </Card.Text>
                                      </div>
                                      <div className="row">
                                        <Card.Text className="col ps-0">Tipo</Card.Text>
                                        <Card.Text className="col pe-0">{pelicula.tipo}</Card.Text>
                                      </div>
                                    </div>
                                  </Card.Body>
                                  <Card.Footer className="d-grid gap-2">
                                    <Button className="m-3" variant="primary">
                                      Cines y salas
                                    </Button>
                                  </Card.Footer>
                                </Card>
                              ),
                          )}
                        </div>
                      ),
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </Container>
    </main>
  );
};

export default Peliculas;
