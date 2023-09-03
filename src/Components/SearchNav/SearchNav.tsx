import './searchNav.styles.scss'
import search from '../../assets/svgs/search.svg'
import { SearchContext } from '../../Contexts/Search.context'
import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Transition, Popover } from '@headlessui/react'

const SearchNav = () => {

    const { updateSearch } = useContext(SearchContext)
    const navigate = useNavigate()

    const promptSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/shop')
        updateSearch(e)
    }


    return (

        <>
            <Popover>
                <Popover.Button className='search__btn'>
                    <img src={search} className='search__svg-toggle' alt="" />
                </Popover.Button>
                <Popover.Panel className='nav__search-form-container'>
                    <form className='nav__search-form' action="submit" onSubmit={promptSearch}>
                        <input className='search__input' type="text" name='search' />
                        <button className='search__btn'>
                            <img src={search} className='search__svg' alt="" />
                        </button>
                    </form>
                </Popover.Panel>
            </Popover>
        </>

    )
}

export default SearchNav