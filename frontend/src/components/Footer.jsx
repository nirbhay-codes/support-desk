import { FaGithub } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Footer() {
  return (
    <footer className='footerStyle'>
      <div className='logo'>
        <Link to='https://github.com/nirbhay-codes'>
          <FaGithub /> github.com/nirbhay-codes
        </Link>
      </div>
    </footer>
  )
}

export default Footer
