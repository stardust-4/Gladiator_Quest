import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = () => {
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    navigate('/central')
  }

  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }

  return (
    <div className="register" style={registerBorder}>
      <p>This is the log in from</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={handleChange}
          value={formValues.email}
          name="email"
          className="input"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={formValues.password}
          name="password"
          className="input"
        />
        <button
          disabled={!formValues.email || !formValues.password}
          className="button"
        >
          Login
        </button>
      </form>
      <p>If you do not have an account then register by clicking below</p>
      <button onClick={() => navigate(`/register`)}>Register</button>
    </div>
  )
}
export default LoginForm
