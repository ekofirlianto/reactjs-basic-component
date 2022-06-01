import monyet1 from './img/1.jpg';
import './style.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-section">
        <h1>Rate Gambar</h1>
        <img src={monyet1} className="monyet1" alt="eko" />
      </header>
    </div>
  );
}

export default Header;
