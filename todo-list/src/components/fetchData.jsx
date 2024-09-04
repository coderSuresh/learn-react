import React from 'react'

// Higher order component, taking Component as a parameter
const fetchData = (Component, key) => {

    return () => {
        const [data, setData] = React.useState([])
        const [loading, setLoading] = React.useState(true)

        React.useEffect(() => {
            const data = localStorage.getItem(key)

            if (data) {
                setData(JSON.parse(data))
            }

            setLoading(false)

        }, [])

        return (
            <Component
                data={data}
                loading={loading}
            />
        )
    }
}

export { fetchData }