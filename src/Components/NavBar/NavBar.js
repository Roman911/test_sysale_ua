import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles.scss'
import cartIcon from '../../assets/cart.png'
import compareIcon from '../../assets/compare.svg'

export const NavBar = () => {
  const { cart, compare } = useSelector(state => state)

  return <nav className='nav'>
    <div className='wrapper row'>
      <Link to='/' >
        <span className='nav__logo'>
          test
        </span>
      </Link>
      <div>
        {
          compare.compare.length !== 0 && <Link to='/compare' >
            <span className='nav__block'>
              <img className='nav__img' src={ compareIcon } alt="Compare"/>
              <span className='nav__counter' >{ compare.compare.length }</span>
            </span>
          </Link>
        }
        <Link to='/cart' >
          <span className='nav__block'>
            <img className='nav__img' src={ cartIcon } alt="Cart"/>
            { cart.cart.length !== 0 && <span className='nav__counter' >{ cart.cart.length }</span> }
          </span>
        </Link>
      </div>
    </div>
  </nav>
}