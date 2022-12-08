import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Link to={'/central'}>Central </Link>
      <Link to={'/squad'}>Squad </Link>
      <Link to={'/transfers'}>Transfers </Link>
      <Link to={'/'}>logout </Link>
    </>
  )
}

export default Nav
