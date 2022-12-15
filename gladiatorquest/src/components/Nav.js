import { Link } from 'react-router-dom'
import '../CSS/Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to={'/central'}>Central </Link>
        </li>
        <li>
          <Link to={'/squad'}>Squad </Link>
        </li>
        <li>
          <Link to={'/transfers'}>Transfers </Link>
        </li>
        <li>
          <Link
            to={'/'}
            onClick={() => {
              localStorage.clear()
            }}
          >
            logout{' '}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
