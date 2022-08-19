import React from "react";

const Image = (props) => {
    return <img height={200} width={200} src={`./src/assets/${props.num}.png`} alt="dice image" />
}

export default Image