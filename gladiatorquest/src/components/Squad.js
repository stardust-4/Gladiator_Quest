import Nav from './Nav'
import FighterCard from './FighterCard'
const Squad = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div className="home" style={homeBorder}>
      <Nav />
      <p>Squad page</p>
      <FighterCard />
    </div>
  )
}
export default Squad
