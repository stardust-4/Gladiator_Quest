const OpponentCard = (props) => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
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
    <div style={homeBorder}>
      <p>Samson</p>
      <img
        style={image}
        src="https://ucarecdn.com/d547e487-95fa-48c5-ad17-a0739c352bef/"
      ></img>
      <p>Retiarius</p>
      <div style={health}>health is {props.opponentHealth}</div>
      <p>Level: 40 </p>
      <p>Upgrade $500 </p>
      <p>Power Move: Net Trip </p>
      <p>Wins 0 </p>
      <p>Losses 0 </p>
    </div>
  )
}
export default OpponentCard
