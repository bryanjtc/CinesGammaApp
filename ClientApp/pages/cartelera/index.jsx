import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import uniqid from 'uniqid';
import styles from './styles.module.css';

const Cartelera = () => {
  const [loading, setLoading] = useState(true);
  const [peliculas, setPeliculas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [cines, setCines] = useState([]);
  const [salas, setSalas] = useState([]);
  const [soportes, setSoportes] = useState([]);
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
      const response = await axios.get('cartelera');
      const data = await response.data;
      setPeliculas(data);
      fetchDataCines();
      fetchDataEventos();
      fetchDataSalas();
      fetchDataSoportes();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataEventos = async () => {
    try {
      const response = await axios.get(`cartelera/eventos`);
      const data = await response.data;
      setEventos(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataSalas = async () => {
    try {
      const response = await axios.get(`cartelera/salas`);
      const data = await response.data;
      setSalas(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataSoportes = async () => {
    try {
      const response = await axios.get(`cartelera/soportes`);
      const data = await response.data;
      setSoportes(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataCines = async () => {
    try {
      const response = await axios.get('cartelera/cines');
      const data = await response.data;
      setCines(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={`w-100 my-5 ${styles.Peliculas}`}>
      <Head>
        <title>Cartelera</title>
      </Head>
      <Container>
        {loading ? (
          <p>
            <em>Loading...</em>
          </p>
        ) : (
          <section className="listapeliculas">
            {cines.map((cine) => (
              <div key={uniqid()}>
                <div className={styles.cinesucursal}></div>
                <h5 className={`py-3 px-2 mb-3 mt-5 text-white rounded ${styles.cinesucursal}`}>
                  {cine.nombre}
                </h5>
                <div className="d-flex flex-column gap-5">
                  {eventos.map(
                    (evento) =>
                      evento.id_cine === cine.id_cine && (
                        <div className="d-flex " key={uniqid()}>
                          {peliculas.map(
                            (pelicula) =>
                              pelicula.id_contenido === evento.id_contenido && (
                                <div
                                  className={`border border-dark d-flex w-100 rounded`}
                                  key={uniqid()}
                                >
                                  {listaPeliculas.map(
                                    (imagen) =>
                                      pelicula.id_contenido === imagen.id && (
                                        <Image
                                          width="90px"
                                          height="121px"
                                          src={imagen.imagesrc}
                                          key={uniqid()}
                                        />
                                      ),
                                  )}
                                  <div className="d-flex flex-column w-100">
                                    <div className="d-flex">
                                      <h4 className="ps-3 pt-3 m-0">{pelicula.titulo}</h4>
                                    </div>
                                    <div className="d-flex flex-row justify-content-end gap-2">
                                      <p
                                        className={`p-2 m-0 rounded text-white ${styles.calificacion}`}
                                      >
                                        {pelicula.calificacion}
                                      </p>
                                      <p
                                        className={`p-2 m-0 rounded text-white me-3 ${styles.duracion}`}
                                      >
                                        {pelicula.duracion}
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-start mb-3 ms-3 gap-3 align-items-center">
                                      {salas.map(
                                        (sala) =>
                                          sala.id_sala === evento.id_sala &&
                                          soportes.map(
                                            (soporte) =>
                                              soporte.id_soporte === sala.id_soporte && (
                                                <p key={uniqid()} className="text-primary m-0">
                                                  {soporte.titulo.toUpperCase()}
                                                </p>
                                              ),
                                          ),
                                      )}
                                      <Button variant="secondary">{evento.hora_emision}</Button>{' '}
                                    </div>
                                  </div>
                                </div>
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

export default Cartelera;
