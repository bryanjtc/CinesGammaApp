import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => (
  <main className={`w-100 my-5 ${styles.home}`}>
    <Head>
      <title>HomePage</title>
    </Head>
    <Container>
      <div className={`d-flex align-items-center mb-5`}>
        <h3 className={`m-0 text-light py-1 px-2 rounded-start ${styles.title}`}>
          CARTELERA EN PANAMÁ, PANAMÁ
        </h3>
        <div className={`rounded-end ${styles.icon}`}>
          <i className={`bi bi-caret-right-fill ${styles.icon}`}></i>
        </div>
      </div>
      <section className="d-flex flex-wrap gap-4">
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="venom2_dtfxii.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="soho_vcpsdz.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="eternals_ox0h6z.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="chernobyl_dkybvl.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="ron_rgijkg.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="dune_z2iofz.jpg" />
        </div>
        <div className={`rounded ${styles.pelicula}`}>
          <Image className="rounded" width="139px" height="204px" src="your-eyes-tell_imsx0v.jpg" />
        </div>
        <div
          className={`rounded d-flex align-items-center justify-content-center text-center ${styles.pelicula}`}
        >
          <h5>Head & Shoulders</h5>
        </div>
        <div
          className={`rounded d-flex align-items-center justify-content-center text-center ${styles.pelicula}`}
        >
          <h5>Tigo Panama</h5>
        </div>
        <div
          className={`rounded d-flex align-items-center justify-content-center text-center ${styles.pelicula}`}
        >
          <h5>PhD. Juan Marcos</h5>
        </div>
        <Button variant={`outline-primary ${styles.tarjetaextra}`}>
          <div className={`d-flex align-items-center justify-content-center text-center`}>
            <h5>Consultar cartelera completa</h5>
          </div>
        </Button>
      </section>
    </Container>
  </main>
);

export default Home;
