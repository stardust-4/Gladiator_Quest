const MiniMe = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'pink',
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

  return (
    <div style={homeBorder}>
      <img
        style={img}
        src="https://akns-images.eonline.com/eol_images/Entire_Site/202044/rs_1024x759-200504101147-1024-Gladiator-6.jpg?fit=around%7C776:576&output-quality=90&crop=776:576;center,top"
        alt="mini fighter head"
      ></img>
      <h4>Fighter Name</h4>
    </div>
  )
}
export default MiniMe
