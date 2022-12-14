const MiniMe = (props) => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: '#941b0c',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '95px',
    height: '105px',
    color: 'black'
  }

  const img = {
    width: '40%',
    height: '40%'
  }
  const h4 = {
    paddingTop: '2px',
    margin: '0px'
  }

  return (
    <div style={homeBorder}>
      <img style={img} src={props.fighter.image} alt="mini fighter head"></img>
      <h4 style={h4}>{props.fighter.name}</h4>
      <p style={h4}>
        {props.fighter.type} {props.fighter.rating}
      </p>
    </div>
  )
}
export default MiniMe
