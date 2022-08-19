import React, {useState} from "react";

const App = () => {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <h1 className="text-6xl font-bold m-5 text-center">{number}</h1>
            <div className="flex flex-wrap justify-center">
                <button onClick={()=>setNumber(number+1)} className="bg-green-600 text-white py-4 px-5 m-1 active:opacity-80 text-xl rounded-md">Increase</button>
                <button onClick={()=>setNumber(0)} className="bg-green-600 text-white py-4 px-5 m-1 active:opacity-80 text-xl rounded-md">Reset</button>
                <button onClick={()=>setNumber(number-1)} className="bg-green-600 text-white py-4 px-5 m-1 active:opacity-80 text-xl rounded-md">Decrease</button>
            </div>
        </div>
    )
}

export default App 