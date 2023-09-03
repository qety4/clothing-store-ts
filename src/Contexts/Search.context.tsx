import { createContext, useState } from "react";




export const SearchContext = createContext({
    searchValue:'',
    updateSearch: (e:React.FormEvent<HTMLFormElement>) => { },
    handleChange:(a: string)=>{ },
    searchReset:()=>{}
})


export const SearchProvider = ({ children }:ChildrenType) => {
    const [searchValue,setSearch] = useState('')


    console.log(searchValue)

    const updateSearch = (e:React.FormEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement
        const searchValueNew = form.search.value
        console.log(searchValueNew)
        setSearch(searchValueNew)
        form.search.value = ''
    }

    const handleChange = (a:string)=>{
        const newValue= a
        setSearch(newValue)
    }

    const searchReset = ()=>{
        setSearch('')
    }

    const value = {
        searchValue,
        updateSearch,
        handleChange,
        searchReset
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>

}

