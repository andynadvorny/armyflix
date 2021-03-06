import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import MobileMenu from '../MobileMenu';
import Button from '../Button';
import './Header.css';

function Header({ pageColor }) {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const menuClasses = ['Menu'];
  if (scrolled) {
    menuClasses.push('MenuScrolled');
  } else if (pageColor === 'light') {
    menuClasses.push('MenuLight');
  }

  return (
    <header className={menuClasses.join(' ')}>
      <div className="Links">
        <Link to="/">
          <img className="Logo" src={Logo} alt="armyflix styled purple logo" />
        </Link>
        <MobileMenu />
        <ul className="PrimaryMenu">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/comeback-trailers">Comeback Trailers</Link></li>
          <li><Link to="/bu-videos">BU MVs</Link></li>
          <li><Link to="/solo-songs">Solo Songs</Link></li>
        </ul>
      </div>
      <Button as={Link} className="ButtonLink" to="/register/video" adaptable>
        Add Video
      </Button>
    </header>
  );
}

export default Header;
