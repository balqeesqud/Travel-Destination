import Tours from '../tours/Tours';
import './Home.css';

function Home(props) {
  return (
    <>
      {/* <Header /> */}
      <div className="card-container">
        <Tours data={props.tour} />
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default Home;
