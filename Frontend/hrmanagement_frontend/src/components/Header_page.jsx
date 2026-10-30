import {Link} from 'react-router-dom'
import './header.css'
function Header_page() {
  return (
    <div className="header">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/Services">/Services</Link>

    </div>
  )
}

export default Header_page