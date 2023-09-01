import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import LoginModal from '../../Components/LogInModal/LogInModal'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import SearchNav from '../../Components/SearchNav/SearchNav'
import { UserContext } from '../../Contexts/User.context'
import { SearchContext } from '../../Contexts/Search.context'
import './nav.styles.scss'

const Nav = () => {
    const { currentUserInfo,currentUser } = useContext(UserContext)
    const { searchReset } = useContext(SearchContext)
    
    return (
        <>
           

                <div className='nav'>
                    <div className='nav__left'>
                        <>
                            <SearchNav />
                        </>
                        <p className='nav__left__shop'>
                            <Link to='/shop' onClick={searchReset}>
                                SHOP
                            </Link>
                        </p>
                    </div>
                    <div className='nav__logo-container'>
                        <Link className='nav__logo' to='/'>
                            logo
                        </Link>
                    </div>
                    <div className='nav__right'>
                        <>
                            {
                                currentUser && currentUserInfo ?
                                    <Link className='login-btn' to='/profile'>
                                        profile
                                    </Link>
                                    :
                                    <LoginModal />
                            }
                        </>
                        <div className='nav__cart-container'>
                            <CartDropdown />
                        </div>
                    </div>

                </div>
            <Outlet />
        </>
    )
}

export default Nav