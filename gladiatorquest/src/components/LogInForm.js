import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  let navigate = useNavigate()
  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }

  return (
    <div className="register" style={registerBorder}>
      <p>This is the log in from</p>
      <button onClick={() => navigate(`/register`)}>Register</button>
      <button onClick={() => navigate(`/central`)}>Log in</button>
    </div>
  )
}
export default LoginForm
