import Nav from './Nav'
import '../CSS/Squad.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ArenaFighterCard from './ArenaFighterCard'
const Squad = ({ myschool, myfighters, champion }) => {
  const [championid, setChampionid] = useState(null)

  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }
  const cards = {
    display: 'flex'
  }

  const select = (e) => {
    setChampionid(e.target.className)
  }
  console.log('selected fighter id = ' + championid)
  console.log(champion)
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('champion', championid)
  }
  const champ = {
    fontSize: '30px'
  }
  return (
    <div style={homeBorder}>
      <>
        <Nav />
      </>
      <div style={champ}>Current champion is {champion.name}</div>
      <div style={cards}>
        {myfighters.map((fighter) => (
          <div onClick={select}>
            <ArenaFighterCard key={fighter.name} fighter={fighter} />
          </div>
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <button>select champion</button>
      </form>
      {/* <form className="form" onSubmit={handleUpgradeSubmit}>
        <button>upgrade selected</button>
      </form> */}
    </div>
  )
}
export default Squad
