import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Head from 'next/head';
import styles from './styles.module.css';

const Cines = () => {
  const [cines, setCines] = useState([]);
  const [titulo, setTitulo] = useState('Cines');
  const [opcionSeleccion, setOpcionSeleccion] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [seleccionado, setSeleccionado] = useState(false);
  const [salas, setSalas] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('cines');
      const data = await response.data;
      setCines(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDataSala = async (id) => {
    try {
      const response = await axios.get(`cines/${id}`);
      const data = await response.data;
      setSalas(data);
    } catch (err) {
      console.error(err);
    }
  };
  const verCine = (nombre, id) => {
    setOpcionSeleccion(nombre);
    setTitulo(`Cine - ${nombre}`);
    setSeleccionado(true);
    fetchDataSala(id);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={`w-100 my-5 ${styles.Cines}`}>
      <Head>
        <title>Cines</title>
      </Head>
      <Container>
        {loading ? (
          <p>
            <em>Loading...</em>
          </p>
        ) : (
          <section>
            <div className="maintop mb-5 d-flex justify-content-between align-items-center">
              <h1 className="fw-bold">{titulo}</h1>
              <div className="maintopright d-flex flex-row-reverse align-items-end gap-3">
                <Button variant="outline-primary">Nueva Sucursal</Button>
                <div className="options">
                  <p className="m-0">Sucursal</p>
                  <DropdownButton id="dropdown-basic-button" title={opcionSeleccion}>
                    {cines.map((cine) => (
                      <Dropdown.Item
                        onClick={(e) => {
                          e.preventDefault();
                          verCine(cine.nombre, cine.id_cine);
                        }}
                        key={cine.id_cine}
                      >
                        {cine.nombre}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
              </div>
            </div>
            <h5 className="fw-bold">Informacion General</h5>
            <Table bordered hover>
              <thead className={styles.thead}>
                <tr>
                  <th>ID</th>
                  <th>RUC</th>
                  <th>Nombre</th>
                  <th>Ciudad</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {cines.map(
                  (cine) =>
                    (opcionSeleccion === 'Todos' && (
                      <tr key={cine.id_cine}>
                        <td className={styles.tcell}>{cine.id_cine}</td>
                        <td className={styles.tcell}>{cine.RUC}</td>
                        <td className={styles.tcell}>{cine.nombre}</td>
                        <td className={styles.tcell}>{cine.ciudad}</td>
                        <td className={styles.tcell}>{cine.direccion}</td>
                        <td className={styles.tcell}>{cine.telefono}</td>
                      </tr>
                    )) ||
                    (cine.nombre === opcionSeleccion && (
                      <tr key={cine.id_cine}>
                        <td className={styles.tcell}>{cine.id_cine}</td>
                        <td className={styles.tcell}>{cine.RUC}</td>
                        <td className={styles.tcell}>{cine.nombre}</td>
                        <td className={styles.tcell}>{cine.ciudad}</td>
                        <td className={styles.tcell}>{cine.direccion}</td>
                        <td className={styles.tcell}>{cine.telefono}</td>
                      </tr>
                    )),
                )}
              </tbody>
            </Table>
            <Button variant="primary">Editar informacion</Button>{' '}
          </section>
        )}
        {seleccionado && (
          <section className="my-5">
            <h5 className="fw-bold">Salas</h5>
            <Table bordered hover>
              <thead className={styles.thead}>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>ID Soporte</th>
                  <th>Cantidad de eventos</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {salas.map((sala) => (
                  <tr key={sala.id_sala}>
                    <td className={styles.tcell}>{sala.id_sala}</td>
                    <td className={styles.tcell}>{sala.nombre}</td>
                    <td className={styles.tcell}>{sala.id_soporte}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="butones d-flex justify-content-between align-items-start">
              <Button variant="danger">Eliminar Sala</Button>
              <div className="butonesright d-flex flex-column gap-3">
                <Button variant="primary">Nueva Sala</Button>{' '}
                <Button variant="primary">Editar Salas</Button>{' '}
              </div>
            </div>
          </section>
        )}
      </Container>
    </main>
  );
};

export default Cines;
