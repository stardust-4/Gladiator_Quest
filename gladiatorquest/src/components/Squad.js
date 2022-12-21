import Nav from './Nav'
import '../CSS/Squad.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ArenaFighterCard from './ArenaFighterCard'
const Squad = ({ myschool, myfighters }) => {
  const [champion, setChampion] = useState(null)

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
    setChampion(e.target.className)
  }
  console.log('selected fighter id = ' + champion)

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('champion', champion)
  }

  return (
    <div style={homeBorder}>
      <>
        <Nav />
      </>
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
