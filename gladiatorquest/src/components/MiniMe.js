const MiniMe = (props) => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: '#941b0c',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '105px',
    height: '125px',
    color: 'black',
    margin: '10px'
  }

  const img = {
    width: '50%',
    height: '50%',
    marginTop: '10px'
  }
  const h4 = {
    paddingTop: '2px',
    margin: '0px',
    fontSize: '30%'
  }

  return (
    // <div style={homeBorder}>
    //   <img style={img} src={props.fighter.image} alt="mini fighter head"></img>
    //   <h4 style={h4}>{props.fighter.name}</h4>
    //   <p style={h4}>
    //     {props.fighter.type} lvl {props.fighter.rating}
    //   </p>
    // </div>
    <div style={homeBorder}>
      <img
        style={img}
        src="https://ucarecdn.com/d547e487-95fa-48c5-ad17-a0739c352bef/"
        alt="mini fighter head"
      ></img>
      <h4 style={h4}>Crixsus</h4>
      <p style={h4}>Retiarius</p>
    </div>
  )
}
export default MiniMe
