import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
import './Tours.css';

function Tours({ data }) {
  return (
    <div className="card-container">
      {data.map((tour) => (
        <Link key={tour.id} to={`/tours/${tour.id}`} className="card-link">
          <Tour tour={tour} />
        </Link>
      ))}
    </div>
  );
}
export default Tours;
