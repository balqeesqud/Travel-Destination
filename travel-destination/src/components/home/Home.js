import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import db from '../../data/db.json';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      {db.map((obj, i) => (
        <Tours name={obj.name} image={obj.image} />
      ))}
      <Footer />
    </div>
  );
}
export default Home;
