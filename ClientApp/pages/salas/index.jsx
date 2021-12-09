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
  const [loading, setLoading] = useState(true);
  const [salas, setSalas] = useState([]);
  const [cines, setCines] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('salas');
      const data = await response.data;
      setSalas(data);
      fetchDataCines();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataCines = async () => {
    try {
      const response = await axios.get('salas/cines');
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
        <title>Salas</title>
      </Head>
      <Container>
        <div className="maintop mb-5 d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">Salas</h1>
          <div className="maintopright d-flex flex-row-reverse align-items-end gap-3">
            <Button variant="outline-primary">Nueva sala</Button>
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
                {salas.map(
                  (sala) =>
                    sala.id_cine === cine.id_cine && (
                      <Card className={styles.tarjeta} key={uniqid()}>
                        <Card.Body className="m-3 mb-0 pb-0">
                          <Card.Title className={`fw-bold ${styles.nombre}`}>{sala.nombre}</Card.Title>
                          <div className="container">
                            <div className="row">
                              <Card.Text className="col ps-0">ID</Card.Text>
                              <Card.Text className="col pe-0">{sala.id_sala}</Card.Text>
                            </div>
                            <div className="row">
                              <Card.Text className="col ps-0">ID cine</Card.Text>
                              <Card.Text className="col pe-0">{sala.id_cine}</Card.Text>
                            </div>
                          </div>
                        </Card.Body>
                        <Card.Footer className="d-grid gap-2">
                          <Button className="m-3" variant="primary">
                            Peliculas
                          </Button>
                        </Card.Footer>
                      </Card>
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
