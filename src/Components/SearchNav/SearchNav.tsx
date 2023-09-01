import './searchNav.styles.scss'
import search from '../../assets/svgs/search.svg'
import { SearchContext } from '../../Contexts/Search.context'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchNav = () => {
    const [searchVisible, setSearch] = useState(false)
    const { updateSearch } = useContext(SearchContext)
    const navigate = useNavigate()

    const setVisisible = () => {
        setSearch(!searchVisible)
    }

    const promptSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchVisible && setVisisible()
        navigate('/shop')
        updateSearch(e)
    }


    return (
        <>
            <div className={searchVisible ? 'nav__search-container search__toggle' : 'nav__search-container'}>
                <img src={search} onClick={setVisisible} className='search__svg-toggle' alt="" />
                <div className='nav__search-form-wrapper'>
                    <form className='nav__search-form' action="submit" onSubmit={promptSearch}>
                        <input className='search__input' type="text" name='search'/>
                        <button className='search__btn'>
                            <img src={search} className='search__svg' alt="" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchNav