import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/db.json';
import './TourDetails.css';

function TourDetails() {
  const { id } = useParams();
  console.log(id);
  const tour = data.filter((tour) => tour.id === id)[0];
  console.log(tour);
  const [showFullInfo, setShowFullInfo] = useState(false);

  if (!tour) {
    return <p>Tour not found</p>;
  }

  const handleToggleInfo = () => {
    setShowFullInfo(!showFullInfo);
  };
  const infoToShow = showFullInfo
    ? tour.info
    : tour.info.substring(0, 100) + '...';

  return (
    <div className="tour-details">
      <div className="card">
        <h2>{tour.name}</h2>
        <img src={tour.image} alt={tour.name} className="tour-image" />
        <p className="tour-info">{infoToShow}</p>
        <button className="toggle-button" onClick={handleToggleInfo}>
          {showFullInfo ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
export default TourDetails;
