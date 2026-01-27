import { Link } from "react-router-dom";
import { useState } from "react";
// import "../Navbar.css"; // optional if you keep CSS separate

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <img src="/images/apcs.jpg" alt="APCS" width="60" height="60"/>
      {/* <h2 style={styles.logo}> APCS</h2> */}

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={`menu ${open ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
        <li><Link to="/careers" onClick={() => setOpen(false)}>Careers</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0f172a",
    color: "white"
  },
  logo: {
    margin: 0
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    cursor: "pointer",
    color:"white"
  }
};

export default Navbar;