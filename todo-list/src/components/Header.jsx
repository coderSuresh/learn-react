import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='px-10 py-5 flex gap-10 justify-between items-center bg-white shadow'>
            <Link to="/">
                <h2 className='font-bold text-lg'>Todo<span className='text-red-800'>List</span></h2>
            </Link>

            <nav className='flex gap-10 items-center'>
                <Link to="/add-task" className='font-semibold hover:underline'>Add</Link>
                <Link to="/view-tasks" className='font-semibold hover:underline'>View</Link>
            </nav>
        </header>
    )
}

export default Header