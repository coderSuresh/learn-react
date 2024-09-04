import React from 'react'

const RenderTodo = ({ data, loading }) => {

    return (
        <>
            {
                loading ?
                    <p className='text-center'>Loading...</p>
                    :
                    data.length == 0 ?
                        <p className='font-semibold text-center text-red-800'>No records found</p>
                        :
                        <ul>
                            {
                                data.map((d, i) => (
                                    <li key={i} className='bg-gray-200 rounded mb-3 p-3 font-medium'>
                                        {`${i + 1}. ${d}`}
                                    </li>
                                ))
                            }
                        </ul>
            }
        </>
    )
}

export default RenderTodo