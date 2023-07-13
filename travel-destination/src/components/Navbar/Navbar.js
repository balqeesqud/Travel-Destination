import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/city/:id">Tour Details</Link> */}
    </nav>
  );
}

export default Navbar;
