import React from 'react'
import { fetchData } from './fetchData'
import RenderTodo from './RenderTodo'

const ViewTodo = () => {

    const key = "tasks"
    const TodoComponent = fetchData(RenderTodo, key)

    return (
        <div className='mt-10 w-full max-w-lg mx-auto bg-white sm:p-10 p-5 rounded'>
            <TodoComponent />
        </div>
    )
}

export default ViewTodo