import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Head from 'next/head';
import styles from './styles.module.css';

const EliminarContenido = () => {
  const [idContenido, setIdContenido] = useState(null);
  const [response, setResponse] = useState('');
  const [variant, setVariant] = useState('success');

  const deleteData = async (idContenido) => {
    try {
      const response = await axios.delete(`eliminarcontenido/${idContenido}`);
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
    deleteData(idContenido);
    setIdContenido('');
  };

  return (
    <main className={`w-100 my-5 ${styles.Peliculas}`}>
      <Head>
        <title>Eliminar Pelicula</title>
      </Head>
      <Container>
        <h1 className="fw-bold mb-5">Eliminar Pelicula</h1>
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

export default EliminarContenido;
