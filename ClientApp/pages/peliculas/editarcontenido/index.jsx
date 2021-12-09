import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Head from 'next/head';
import styles from './styles.module.css';

const EditarContenido = () => {
  const [idContenido, setIdContenido] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [director, setDirector] = useState('');
  const [duracion, setDuracion] = useState(null);
  const [año, setAño] = useState(null);
  const [calificacion, setCalificacion] = useState(null);
  const [genero, setGenero] = useState('');
  const [distribuidora, setDistribuidora] = useState('');
  const [fechaEstreno, setFechaEstreno] = useState('');
  const [tipo, setTipo] = useState('');
  const [response, setResponse] = useState('');
  const [variant, setVariant] = useState('success');

  const putData = async (
    idContenido,
    titulo,
    director,
    duracion,
    año,
    calificacion,
    genero,
    distribuidora,
    fechaEstreno,
    tipo,
  ) => {
    try {
      const response = await axios.put(`editarcontenido`, {
        id_contenido: idContenido,
        titulo: titulo,
        director: director,
        duracion: duracion,
        año: año,
        calificacion: calificacion,
        genero: genero,
        distribuidora: distribuidora,
        fecha_estreno: fechaEstreno,
        tipo: tipo,
      });
      setVariant('success');
      setResponse(response.data);
    } catch (err) {
      console.error(err);
      setVariant('danger');
      setResponse('Error, Intente nuevamente');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData(
      idContenido,
      titulo,
      director,
      duracion,
      año,
      calificacion,
      genero,
      distribuidora,
      fechaEstreno,
      tipo,
    );
    setIdContenido('');
    setTitulo('');
    setDirector('');
    setDuracion('');
    setAño('');
    setCalificacion('');
    setGenero('');
    setDistribuidora('');
    setFechaEstreno('');
    setTipo('');
  };

  return (
    <main className={`w-100 my-5 ${styles.Peliculas}`}>
      <Head>
        <title>Editar Pelicula</title>
      </Head>
      <Container>
        <h1 className="fw-bold mb-5">Editar Pelicula</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="idContenido">
            <Form.Label>ID Contenido</Form.Label>
            <Form.Control
              onChange={(e) => {
                setIdContenido(e.target.value);
                setResponse('');
              }}
              value={idContenido}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTitulo(e.target.value);
                setResponse('');
              }}
              value={titulo}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="director">
            <Form.Label>Director</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDirector(e.target.value);
                setResponse('');
              }}
              value={director}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duracion">
            <Form.Label>Duracion</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDuracion(e.target.value);
                setResponse('');
              }}
              value={duracion}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="año">
            <Form.Label>Año</Form.Label>
            <Form.Control
              onChange={(e) => {
                setAño(e.target.value);
                setResponse('');
              }}
              value={año}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="calificacion">
            <Form.Label>Calificacion</Form.Label>
            <Form.Control
              onChange={(e) => {
                setCalificacion(e.target.value);
                setResponse('');
              }}
              value={calificacion}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="genero">
            <Form.Label>Genero</Form.Label>
            <Form.Control
              onChange={(e) => {
                setGenero(e.target.value);
                setResponse('');
              }}
              value={genero}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="distribuidora">
            <Form.Label>Distribuidora</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDistribuidora(e.target.value);
                setResponse('');
              }}
              value={distribuidora}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fechaEstreno">
            <Form.Label>Fecha Estreno</Form.Label>
            <Form.Control
              onChange={(e) => {
                setFechaEstreno(e.target.value);
                setResponse('');
              }}
              value={fechaEstreno}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTipo(e.target.value);
                setResponse('');
              }}
              value={tipo}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {response && (
          <Alert variant={variant} className="mt-5">
            <Alert.Heading>{response}</Alert.Heading>
          </Alert>
        )}
      </Container>
    </main>
  );
};

export default EditarContenido;
