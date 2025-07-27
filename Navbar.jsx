import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      padding: '10px',
      background: '#f0f0f0',
      borderBottom: '1px solid #ccc',
      display: 'flex',
      gap: '15px'
    }}>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/vendors">Vendors</Link>
      <Link to="/suppliers">Suppliers</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      
    </nav>
  );
}
