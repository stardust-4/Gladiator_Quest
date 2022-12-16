import backgrounds from '../assets/backgrounds'
import ArenaFighterCard from './ArenaFighterCard'
import ArenaSquad from './ArenaSquad'
import OpponentCard from './OpponentCard'
import '../CSS/Central.css'
import { startTransition, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Arena = () => {
  let navigate = useNavigate()

  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'pink',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundImage: `url(${backgrounds[0].url})`,
    height: '750px'
  }

  const yourFighter = {
    display: 'inline-block',
    width: '235px',
    height: '305px',
    float: 'left',
    marginTop: '270px',
    marginLeft: '260px'
  }
  const opponent = {
    display: 'inline-block',
    width: '235px',
    marginRight: '260px',
    float: 'right',
    marginTop: '270px'
  }
  const squad = {
    display: 'flex',
    float: 'left',
    marginTop: '20px'
  }
  const fight = {
    backgroundColor: 'pink',
    width: '85px',
    height: '85px',
    margin: 'auto',
    borderRadius: '45%',
    padding: '20px',
    fontSize: '20px'
  }
  const [opponentHealth, setopponentHealth] = useState(100)
  const [goodguyHealth, setgoodguyHealth] = useState(100)
  const [goodguyAttack, setgoodguyAttack] = useState(5)
  const [opponentAttack, setopponentAttack] = useState(8)

  // setInterval(() => {
  //   setgoodguyHealth(goodguyHealth - 3)
  //   console.log(goodguyHealth)
  // }, 700)

  const opponentattacking = () => {
    console.log(goodguyHealth)
    intervalCounter += 1
    // if (intervalCounter === 60) {
    //   clearInterval(interval)
    // }
    if (goodguyHealth < 1) {
      // clearInterval(interval)
      navigate('/loss')
    } else if (goodguyHealth > 1) {
      setgoodguyHealth(goodguyHealth - 8)
    }
  }

  const attack = () => {
    setopponentHealth(opponentHealth - goodguyAttack)
    setgoodguyHealth(goodguyHealth - opponentAttack) //uncomment for non ai
    console.log(opponentHealth)
    if (opponentHealth < 1 && goodguyHealth > 0) {
      navigate('/win')
      // setgoodguyHealth(100)
      // setopponentHealth(100)
    } else if (goodguyHealth < 1 && opponentHealth > 0) {
      navigate('/loss')
      // setgoodguyHealth(100)
      // setopponentHealth(100)
    }
  }

  let intervalCounter = 0
  // let interval = setInterval(opponentattacking, 700)

  return (
    <div className="home" style={homeBorder}>
      <p>Arena, fight!</p>
      <div style={yourFighter}>
        <ArenaFighterCard goodguyHealth={goodguyHealth} />
      </div>
      <div className="opfightercardwrapper" style={opponent}>
        {<OpponentCard opponentHealth={opponentHealth} />}
      </div>
      <div style={squad}>{/* <ArenaSquad /> */}</div>
      <div style={fight} onClick={attack}>
        Click!
      </div>
    </div>
  )
}
export default Arena
