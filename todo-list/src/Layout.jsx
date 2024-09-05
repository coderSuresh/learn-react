import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import useOnlineStatus from './hooks/useOnlineStatus'

const Layout = () => {
    const isOnline = useOnlineStatus()

    return (
        <>
            {
                isOnline ?
                    <>
                        <Header />
                        <Outlet />
                    </>
                    : <h2 className="text-center mt-20 font-bold text-2xl">You are offline!</h2>
            }
        </>
    )
}

export default Layout