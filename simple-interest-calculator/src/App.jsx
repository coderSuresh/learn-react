import { useState } from 'react'
import './styles/style.css'

const App = () => {
  const [p, setP] = useState("")
  const [t, setT] = useState("")
  const [r, setR] = useState("")

  const calculate = (e) => {

    e.preventDefault()
    const si = p * t * r / 100

    if (!p || !t || !r) alert("All fields are required!")
    else alert(si)
  }

  return (
    <div className="App">
      <header className='bg-green-600 py-4 px-2 md:px-4'>
        <h1 className='text-white uppercase text-l md:text-xl lg:text-2xl tracking-wide font-bold text-center lg:text-left'>Simple Interest Calculator</h1>
      </header>

      <form onSubmit={calculate} className='flex flex-col my-5 px-2  md:px-4 items-center lg:items-start'>

        <input className='border-2 border-green-600 py-2 text-green-800 px-2 rounded-md focus:outline-green-800 mb-5 w-11/12 md:w-1/2 lg:w-1/3' type="text" value={p} onChange={(e) => setP(e.target.value)} placeholder="Principle" />

        <input className='border-2 border-green-600 py-2 text-green-800 px-2 rounded-md focus:outline-green-800 mb-5 w-11/12 md:w-1/2 lg:w-1/3' type="text" value={t} onChange={(e) => setT(e.target.value)} placeholder="Time" />

        <input className='border-2 border-green-600 py-2 text-green-800 px-2 rounded-md focus:outline-green-800 mb-5 w-11/12 md:w-1/2 lg:w-1/3' type="text" value={r} onChange={(e) => setR(e.target.value)} placeholder="Rate" />

        <input className='border-2 bg-green-600 border-green-600 py-2 cursor-pointer text-white px-2 rounded-md hover:opacity-80 active:scale-90 focus:outline-green-700 mb-5 w-11/12 md:w-1/2 lg:w-1/3 transition-transform' type="submit" value="Calculate" />
      </form>

    </div>
  )
}

export default App
