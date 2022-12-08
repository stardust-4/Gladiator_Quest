import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const RegisterForm = () => {
  let navigate = useNavigate()

  let initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [newUser, setNewUser] = useState(initialState)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const createUser = () => {
    console.log('new user should be created')
  }

  const registerBorder = {
    borderWidth: '4px',
    backgroundColor: 'blue',
    borderColor: 'gold',
    borderStyle: 'solid',
    color: 'white'
  }

  return (
    <div className="register" style={registerBorder}>
      <p>This is the register from</p>
      <form className="form" onSubmit={createUser}>
        <input
          placeholder="Name"
          onChange={handleChange}
          value={newUser.name}
          name="name"
          className="input"
        />
        <input
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
          name="email"
          className="input"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={newUser.password}
          name="password"
          className="input"
        />
        <input
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
          className="input"
        />
        <button
          onClick={() => navigate(`/pickschool`)}
          disabled={
            (!newUser.email,
            !newUser.name,
            !newUser.password,
            !newUser.confirmPassword) ||
            newUser.confirmPassword !== newUser.password
          }
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
export default RegisterForm
