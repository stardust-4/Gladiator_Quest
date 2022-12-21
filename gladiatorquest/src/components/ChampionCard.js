const ChampionCard = ({ champion }) => {
  // console.log(champion)
  const champ = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '225px',
    height: '275px'
  }

  const image = {
    width: '60px',
    height: '60px',
    marginTop: '10px',
    display: 'grid',
    zIndex: '6',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const health = {
    height: '30px',
    width: '80%',
    backgroundColor: 'green',
    margin: 'auto',
    fontSize: '20px'
  }

  return (
    <div style={champ}>
      <p>{champion.name}</p>
      <img style={image} src={champion.image}></img>
      <p>{champion.type}</p>
      <div style={health}>health is {champion.healthpoints}</div>
      <p>Level: {champion.rating} </p>
      <p>Power Move: {champion.powermove} </p>
      <p>
        Wins: {champion.wins} Losses: {champion.losses}
      </p>
    </div>
  )
}
export default ChampionCard
