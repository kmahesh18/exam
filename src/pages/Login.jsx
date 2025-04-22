import { useState } from 'react'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.email === email && bcrypt.compareSync(password, user.password)) {
      alert('Login successful!')
      setIsLoggedIn(true)
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login
