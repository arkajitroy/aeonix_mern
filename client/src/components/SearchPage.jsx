import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const SearchPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                {/* APP HEADING / TITLE */}
                <h1 className="my-5 text-3xl font-bold text-black">Search Page</h1>
                <div className="d-flex justify-end">
                    <Link to='/'>
                        <button className="p-5 bg-black text-white rounded-3xl shadow-md my-2 py-2 transition-all duration-100 hover:bg-blue-600">
                            Back to Homepage
                        </button>
                    </Link>
                </div>

                {/* SEARCH TODOS FORM COMPONENT */}
                <SearchForm />

            </div>
        </div>
    )
}

export default SearchPage