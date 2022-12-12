import FighterCard from './ArenaFighterCard'
import Nav from './Nav'

const Transfers = () => {
  const getTransferFighters = () => {}

  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div className="home" style={homeBorder}>
      <Nav />
      <p>Transfers</p>
      <FighterCard />
    </div>
  )
}
export default Transfers
