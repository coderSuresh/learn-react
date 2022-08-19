import React, { useState } from "react";
import Image from './Image';
import './styles/style.css';

const App = () => {
    const [diceNumber1, setDiceNumber1] = useState(1)
    const [diceNumber2, setDiceNumber2] = useState(1)

    const getRand = () => {
        const rand1 = Math.floor((Math.random() * 6) + 1)
        setDiceNumber1(rand1)

        const rand2 = Math.floor((Math.random() * 6) + 1)
        setDiceNumber2(rand2)
    }

    return (
        <div className="flex">
            <div>
                <Image num={diceNumber1} />
                <Image num={diceNumber2} />
            </div>
            <button onClick={() => getRand()}>Roll</button>
        </div>
    )
}

export default App;