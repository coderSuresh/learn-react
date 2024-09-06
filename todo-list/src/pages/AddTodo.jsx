import React from 'react'

const AddTodo = () => {

    const [currentTask, setCurrentTask] = React.useState('')
    const [tasks, setTasks] = React.useState([])
    const [alert, setAlert] = React.useState({
        success: false,
        message: ''
    })

    React.useEffect(() => {
        const allTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
        if (allTasks) setTasks(allTasks)
    }, [])

    const saveTask = (e) => {
        e.preventDefault()

        if (currentTask) {
            tasks.unshift(currentTask)
            localStorage.setItem("tasks", JSON.stringify(tasks))

            setCurrentTask('')

            setAlert({
                success: true,
                message: "Task added."
            })
        } else setAlert({
            success: false,
            message: "Task can not be empty!"
        })
    }

    return (
        <form onSubmit={(e) => saveTask(e)}
            className='mt-10 w-full max-w-lg mx-auto bg-white sm:p-10 p-5 rounded'
        >
            <div className='flex flex-col gap-3'>
                <label htmlFor="task">Task</label>
                <input
                    value={currentTask}
                    type="text"
                    onChange={(e) => setCurrentTask(e.target.value)}
                    className='w-full rounded px-3 py-1 border border-gray-400 focus:border-red-800 focus:outline-none'

                />
                <button className='font-semibold uppercase px-5 py-1 bg-red-800 text-white hover:opacity-80 rounded'>
                    Add Task
                </button>
            </div>

            {
                alert?.message && (
                    <p className={`${alert.success ? 'text-green-800' : 'text-red-800'} font-semibold mt-3`}>
                        {alert.message}
                    </p>
                )
            }
        </form>
    )
}

export default AddTodo