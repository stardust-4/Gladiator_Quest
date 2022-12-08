import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Nav = () => {
  // let navigate = useNavigate()

  return (
    <>
      <Link to={'/central'}>Central </Link>
      <Link to={'/squad'}>Squad </Link>
      <Link to={'/transfers'}>Transfers </Link>
    </>
  )
}

export default Nav
