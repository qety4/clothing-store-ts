import './searchNav.styles.scss'
import search from '../../assets/svgs/search.svg'
import { SearchContext } from '../../Contexts/Search.context'
import { Fragment, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'

const SearchNav = () => {
    const btn= useRef<HTMLButtonElement | null>(null)
    const { updateSearch } = useContext(SearchContext)
    const navigate = useNavigate()

    const promptSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/shop')
        updateSearch(e)
        close()
    }
    const close = ()=>{
        if(btn.current)
            btn.current.click()
        return
    }

    return (

        <>
            <Popover>
                <Popover.Button ref={btn} className='search__btn'>
                    <img src={search} className='search__svg-toggle' alt="" />
                </Popover.Button>
                <Popover.Panel as={motion.div}
                 variants={{
                    hidden: { opacity: 0.8, y: -20 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate='visible'
                transition={{duration:0.38,delay:0}}
                className='nav__search-form-container'>

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