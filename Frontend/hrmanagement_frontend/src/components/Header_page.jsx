
import { Link } from 'react-router-dom'
import './header.css'

function Header_page() {
  return (
    <nav className="header">
      <div className="logo">HR Management</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default Header_page
