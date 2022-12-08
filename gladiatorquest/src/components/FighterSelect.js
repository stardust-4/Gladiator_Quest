import Squad from './Squad'
const FighterSelect = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'purple',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div style={homeBorder}>
      <p>Fighter select</p>
      <Squad />
    </div>
  )
}
export default FighterSelect
