import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Head from 'next/head';

const Tarea = () => {
  const [tLibre, setTLibre] = useState('');
  const [tEncriptado, setTEncriptado] = useState('');
  const [tDesencriptado, setTDesencriptado] = useState('');
  const [tDesencriptadoFinal, setTDesencriptadoFinal] = useState('');

  const tlibreChange = (event) => {
    setTLibre(event.target.value);
  };

  const handleSubmitTlibre = (event) => {
    event.preventDefault();
    axiosPostCall(tLibre);
  };

  const handleSubmitTencriptado = (event) => {
    event.preventDefault();
    setTDesencriptadoFinal(tDesencriptado);
  };

  const axiosPostCall = async (postText) => {
    const bodyText = {
      TextoIngresado: postText,
    };
    try {
      await axios.post('data', bodyText);
    } catch (error) {
      console.log(error);
    }
    try {
      await axios.get('data').then((res) => {
        setTEncriptado(res.data[0]);
        setTDesencriptado(res.data[1]);
      });
    } catch (error) {
      console.log(`error: `, error);
    }
  };
  return (
    <div>
      <Head>
        <title>Tarea</title>
      </Head>
      <Container className="my-5">
        <Form onSubmit={(e) => handleSubmitTlibre(e)}>
          <Form.Group className="mb-3" controlId="tLibre">
            <Form.Label>Texto libre:</Form.Label>
            <Form.Control name="tLibre" value={tLibre} onChange={(e) => tlibreChange(e)} />
          </Form.Group>
          <Button className="mb-5" as="input" type="submit" value="Encriptar" />
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="tEncriptado">
            <Form.Label>Texto encriptado:</Form.Label>
            <Form.Control name="tLibre" value={tEncriptado} readOnly placeholder={tEncriptado} />
          </Form.Group>
          <Button className="mb-5" type="button" onClick={(e) => handleSubmitTencriptado(e)}>
            Desencriptar
          </Button>
          <Form.Group className="mb-3" controlId="tDesencriptado">
            <Form.Label>Texto desencriptado:</Form.Label>
            <Form.Control
              name="tDesencriptado"
              value={tDesencriptadoFinal}
              readOnly
              placeholder={tDesencriptadoFinal}
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Tarea;
