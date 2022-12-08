const Arena = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'pink',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>Arena, fight!</p>
    </div>
  )
}
export default Arena
