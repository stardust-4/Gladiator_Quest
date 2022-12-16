import Nav from './Nav'
import FighterCard from './ArenaFighterCard'
import '../CSS/Squad.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import MiniMe from './MiniMe'
import OpponentCard from './OpponentCard'
import ArenaFighterCard from './ArenaFighterCard'
import Thr from './Thr'
const Squad = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }
  // const [fighterList, setFighterList] = useState([])

  // const getFighters = async () => {
  //   const res = await axios.get(`${BASE_URL}fighter/`)
  //   setFighterList(res.data)
  //   console.log(fighterList)
  // }
  // useEffect(() => {
  //   getFighters()
  // }, [])
  let currentuser = localStorage.getItem('userid')

  const [fighterList, setFighterList] = useState([])

  const getFighters = async () => {
    const response = await axios.get(
      `${BASE_URL}school/myschool/${currentuser}`
    )
    let thisSchoolId = response.data.id
    const res = await axios.get(`${BASE_URL}fighter/user/${thisSchoolId}`)
    setFighterList(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getFighters()
  }, [])
  console.log(fighterList)

  const fightercardwrapper = {
    height: '50px',
    width: '50px'
  }
  const cards = {
    display: 'flex'
  }
  return (
    <div className="home" style={homeBorder}>
      <>
        <Nav />
      </>
      {/* {fighterList.map((fighter) => (
        //

        <div>
          <SchoolCard
            id={fighter.id}
            value={fighter.value}
            fighter={fighter}
            key={fighter.id}
          />
        </div> */}
      {/* // ))} */}
      {/* <div>
        {fighterList.map((fighter) => (
          <div style={fightercardwrapper} className="fightercardwrapper">
            <MiniMe fighter={fighter} key={fighter.id} />
          </div>
        ))}
      </div> */}

      <div style={cards}>
        <OpponentCard />
        <ArenaFighterCard />
        <OpponentCard />
        <OpponentCard />
        <OpponentCard />
        <OpponentCard />
        <Thr />
      </div>
    </div>
  )
}
export default Squad
