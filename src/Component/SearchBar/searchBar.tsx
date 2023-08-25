import React from 'react'
import './searchBar.css'
import searchIcon from '../../assets/searchGif.gif'
const SearchBar = () => {
    return (
        <>
            <div className="search-box me-2 me-md-0">
                <button className="btn-search me-5"><img className='w-100' src="https://img.icons8.com/glyph-neue/64/search--v1.png" alt="search"/></button>
                <input type="text" className="input-search" placeholder="Type to Search..." />
            </div>
        </>
    )
}

export default SearchBar
