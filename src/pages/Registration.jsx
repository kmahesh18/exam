import { useState } from 'react'
import bcrypt from 'bcryptjs'

function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const hashedPassword = bcrypt.hashSync(password, 10)
    localStorage.setItem('user', JSON.stringify({ name, email, password: hashedPassword }))
    setSuccess(true)
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
      {success && <p>Registration successful! You can now log in.</p>}
    </div>
  )
}

export default Registration
