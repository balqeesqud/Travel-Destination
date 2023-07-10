import './Tours.css';
import db from '../../data/db.json';

//name and image props as arguments using destructuring
// it can be written without destructuring (props) is an object
//const TourItem = (props) => {
// const { name, image } = props;

function Tours(props) {
  const TourElement = ({ name, image }) => (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );

  return (
    <div className="home-content">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />

      {db.map((obj, i) => (
        <TourElement key={i} name={obj.name} image={obj.image} />
      ))}
    </div>
  );
}

export default Tours;

//+++++++
