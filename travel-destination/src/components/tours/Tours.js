import './Tours.css';
function Tours(props) {
  return (
    <div class="home-content">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Tours;
