import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from '../Navbar-Components/images/Alibaba-Logo.png'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
