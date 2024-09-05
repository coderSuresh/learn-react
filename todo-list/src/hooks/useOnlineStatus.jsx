import React from 'react'

// custom hook to check whether internet is connected or not
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = React.useState(navigator.onLine)

    React.useEffect(() => {
        const setOnline = () => {
            setIsOnline(true)
        }
        const setOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", setOnline)
        window.addEventListener("offline", setOffline)

        return () => {
            window.removeEventListener("online", setOnline)
            window.removeEventListener("offline", setOffline)
        }
    }, [])

    return isOnline
}

export default useOnlineStatus