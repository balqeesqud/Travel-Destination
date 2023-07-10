import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Tours/>
      <Footer />
    </div>
  );
}
export default Home;
