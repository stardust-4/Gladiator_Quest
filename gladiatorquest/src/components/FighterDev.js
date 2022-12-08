import FighterCard from './FighterCard'

const FighterDev = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'grey',
    borderColor: 'gold',
    borderStyle: 'solid'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>Fighter Dev</p>
      <FighterCard />
    </div>
  )
}
export default FighterDev
