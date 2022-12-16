const Thr = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'gold',
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
    backgroundColor: 'blue',
    margin: 'auto'
  }
  return (
    <div style={homeBorder}>
      <p>Crixus</p>
      <img
        style={image}
        src="https://ucarecdn.com/4ef9fd96-525b-4b7b-b6d2-cb26ea59ac98/"
      ></img>
      <p>Thraex</p>
      <div style={health}>health</div>
      <p>Level: 53 </p>
      <p>Upgrade $200 </p>
      <p>Power Move: Achiles Slice </p>
      <p>Wins 5 </p>
      <p>Losses 0 </p>
    </div>
  )
}
export default Thr
