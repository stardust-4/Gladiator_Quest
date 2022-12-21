import '../CSS/YourSchool.css'
import { useEffect, useState } from 'react'

const YourSchool = ({ myschool }) => {
  const money = {
    fontSize: '30px'
  }
  return (
    <div className="yourschoolcard">
      <div>{myschool.name}</div>
      <img
        className="yourschoolimage"
        src={myschool.image}
        alt="schoolimage"
      ></img>
      <div style={money}>wealth $ {myschool.wealth}</div>
      <div>{myschool.description}</div>
    </div>
  )
}
export default YourSchool
