const FighterCard = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '225px',
    height: '275px'
  }

  return (
    <div style={homeBorder}>
      <p>Fighter name</p>
      <p>Fighter image</p>
      <p>Fighter type</p>
      <p>Fighter health bar</p>
    </div>
  )
}
export default FighterCard
