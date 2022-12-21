import '../CSS/SchoolCard.css'

const ArenaFighterCard = ({ fighter }) => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '225px',
    height: '275px'
  }
  const image = {
    width: '50px',
    height: '50px',
    marginTop: '10px',
    display: 'grid',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const health = {
    height: '30px',
    width: '80%',
    backgroundColor: 'red',
    margin: 'auto',
    fontSize: '20px'
  }
  // console.log(fighter)
  return (
    <div className={fighter.id} id="card" tabIndex="0">
      <p>{fighter.name}</p>
      <img style={image} alt="mini fighter head" src={fighter.image}></img>
      <p>{fighter.type}</p>
      <div style={health}>{fighter.healthpoints}</div>
      <p>{fighter.level}</p>
      <p>Upgrade cost {fighter.upgradecost}</p>
      <p>Power Move: {fighter.powermove}</p>
      <p>wins {fighter.wins}</p>
      <p>losses {fighter.losses}</p>
    </div>
  )
}
export default ArenaFighterCard
