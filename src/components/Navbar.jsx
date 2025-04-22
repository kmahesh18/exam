import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar
