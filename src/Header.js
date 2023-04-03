import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'



function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication =() => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' 
        src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' alt=''
      />
      </Link>

      <div className='header_address'>
            <LocationOnOutlinedIcon/>
      </div>
      <div className='header_address_two'>
            <span className='header_LineOne'>Hello<br></br></span>
            <span className='header_LineTwo'>Select your address</span>
            </div>
      

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
        <Link to = {!user && '/login'}>
        <div onClick={handleAuthentication} className='header_option'>
          <span className='header_optionLineOne'>Hello {user ? <p>{user?.email}</p> : 'Guest'}</span>
          <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <Link to='/orders'>
        <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>& Orders</span>
        </div>
        </Link>

        <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
      <div className='header_optionBasket'>
        <ShoppingBasketIcon/>
        <span className='header_optionLineTwo header_basketCount'>
          {basket?.length}
        </span>
      </div>
      </Link>

    </div>
  )
}

export default Header