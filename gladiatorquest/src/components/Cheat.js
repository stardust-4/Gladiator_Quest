const Cheat = () => {
  const cheat = {
    marginTop: '45px'
  }
  const small = {
    fontSize: '15px'
  }

  return (
    <div className="cheat" style={cheat}>
      <div>Retiarius &gt; Thraex</div>
      <div>Thraex &gt; Hoplite</div>
      <div>Hoplite &gt; Retiarius</div>
      <div style={small}>
        {' '}
        Select your champion accordingly, you will be facing a Retiarius!
      </div>
    </div>
  )
}

export default Cheat
