import LoginForm from './LogInForm'
const Home = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>This is Home</p>
      <LoginForm />
    </div>
  )
}
export default Home
