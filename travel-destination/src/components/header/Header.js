// import Home from '../home/Home';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="page-header">
      <Link to="/">Home</Link>
      <h1 className="home-heading"> Travel Destination </h1>
    </div>
  );
}

export default Header;
