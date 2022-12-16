import LoginForm from './LogInForm'
import '../CSS/Home.css'
const Home = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundImage:
      "url('https://preview.redd.it/hxqilf0wkgm31.jpg?auto=webp&s=c6089f8d0793f9959556d8191a970b5a2d40de14')"
  }

  return (
    <div className="home" style={homeBorder}>
      {/* <p>This is Home</p> */}
      <div className="loginformcontainer">
        <LoginForm />
      </div>
      <p className="poopie">Gladiator Quest</p>
    </div>
  )
}
export default Home
