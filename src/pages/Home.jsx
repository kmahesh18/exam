import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home({ isLoggedIn }) {
  const [cgpa, setCgpa] = useState('')
  const [backlogs, setBacklogs] = useState('')
  const [eligible, setEligible] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cgpa >= 7 && backlogs <= 1) {
      setEligible(true)
    } else {
      setEligible(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="home-login-prompt">
        <h1>Welcome to Placement Eligibility Checker</h1>
        <p>Sign in to access the placement eligibility checker and discover your opportunities.</p>
        <button onClick={() => navigate('/login')}>Sign In</button>
      </div>
    )
  }

  return (
    <div className="page-content">
      <h1>Placement Eligibility Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CGPA:
          <input
            type="number"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            min="0"
            max="10"
            step="0.01"
            required
          />
        </label>
        <label>
          Number of Backlogs:
          <input
            type="number"
            value={backlogs}
            onChange={(e) => setBacklogs(e.target.value)}
            min="0"
            required
          />
        </label>
        <button type="submit">Check Eligibility</button>
      </form>
      {eligible !== null && (
        <p className={eligible ? 'success-message' : 'error-message'}>
          {eligible ? '🎉 Congratulations! You are eligible for placements!' : '❌ Sorry, you are not eligible for placements.'}
        </p>
      )}
    </div>
  )
}

export default Home
