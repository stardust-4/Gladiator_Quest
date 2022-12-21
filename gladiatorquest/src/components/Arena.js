import backgrounds from '../assets/backgrounds'
import ChampionCard from './ChampionCard'
import ArenaSquad from './ArenaSquad'
import OpponentCard from './OpponentCard'
import '../CSS/Central.css'
import { startTransition, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Arena = ({ myschool, champion }) => {
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
    // display: 'inline-block',
    // width: '235px',
    // marginRight: '460px',
    // float: 'right',
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
  const [goodguyHealth, setgoodguyHealth] = useState(champion.healthpoints)
  const [goodguyAttack, setgoodguyAttack] = useState([])
  const [opponentAttack, setopponentAttack] = useState([])

  // const determinAttackStrength = () => {
  //   if (champion.type === 'Thraex') {
  //     setgoodguyAttack(5)
  //     setopponentAttack(6)
  //   } else if (champion.type === 'Hoplite') {
  //     setgoodguyAttack(6)
  //     setopponentAttack(5)
  //   } else if (champion.type === 'Retiarius') {
  //     setgoodguyAttack(5)
  //     setopponentAttack(5)
  //   }
  // }
  const attack = () => {
    if (champion.type === 'Thraex') {
      if (champion.rating > 60) {
        setgoodguyAttack(5)
        setopponentAttack(6)
      } else if (champion.rating < 30) {
        setgoodguyAttack(3)
        setopponentAttack(6)
      } else {
        setgoodguyAttack(4)
        setopponentAttack(6)
      }
    } else if (champion.type === 'Hoplite') {
      if (champion.rating > 60) {
        setgoodguyAttack(5)
        setopponentAttack(6)
      } else if (champion.rating < 30) {
        setgoodguyAttack(3)
        setopponentAttack(6)
      } else {
        setgoodguyAttack(4)
        setopponentAttack(6)
      }
    } else if (champion.type === 'Retiarius') {
      if (champion.rating > 60) {
        setgoodguyAttack(5)
        setopponentAttack(6)
      } else if (champion.rating < 30) {
        setgoodguyAttack(3)
        setopponentAttack(6)
      } else {
        setgoodguyAttack(4)
        setopponentAttack(6)
      }
    }
    setopponentHealth(opponentHealth - goodguyAttack)
    setgoodguyHealth((champion.healthpoints -= opponentAttack)) //uncomment for non ai
    // console.log(opponentHealth)
    if (opponentHealth < 1 && goodguyHealth > 0) {
      myschool.wealth += 200
      myschool.wins += 1

      navigate('/win')
      // setgoodguyHealth(100)
      // setopponentHealth(100)
    } else if (goodguyHealth < 1 && opponentHealth > 0) {
      myschool.wealth -= 200
      myschool.losses += 1

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
        <ChampionCard goodguyHealth={goodguyHealth} champion={champion} />
      </div>
      <div className="opfightercardwrapper" style={opponent}>
        {<OpponentCard opponentHealth={opponentHealth} />}
      </div>
      <div style={squad}>{/* <ArenaSquad /> */}</div>
      <div style={fight} onClick={attack}>
        Click!
      </div>
      {/* <form>
        <button style={fight} onClick={start}>
          Start/restart game
        </button>
      </form> */}
    </div>
  )
}
export default Arena
