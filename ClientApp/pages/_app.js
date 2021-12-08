import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
