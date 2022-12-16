import hop from '../assets/hop.png'

const ArenaFighterCard = (props) => {
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

  return (
    <div style={homeBorder}>
      <p>Thoros</p>
      <img style={image} alt="mini fighter head" src={hop}></img>
      <p>Hoplomachus</p>
      <div style={health}>health {props.goodguyHealth}</div>
      <p>Level: 90 </p>
      <p>Upgrade $800 </p>
      <p>Power Move: Flurry </p>
      <p>Wins 20 </p>
      <p>Losses 3 </p>
    </div>
  )
}
export default ArenaFighterCard
