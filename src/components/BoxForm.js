import React, { useState } from "react"

const BoxForm = (props) => {
    const { boxes, setBoxes } = props
    const [inputs, setInputs] = useState({ color: "", size: "" })

    let box = {
        color: "",
        width: "100px",
        height: "100px",
    };

    const newColor = (event) => {
        setInputs({ ...inputs, color: event.target.value });
    };

    const newSize = (event) => {
        setInputs({ ...inputs, size: event.target.value });
    };

    console.log(inputs);

    const handleSubmit = (event) => {
        event.preventDefault();
        box.color = inputs.color;
        [box.width, box.height] = [`${inputs.size}px`, `${inputs.size}px`]
        setBoxes([...boxes, box]);
        setInputs({ color: "", size: "" })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input id="color" onChange={newColor} type="text" value={inputs.color}></input>
            <br />
            <label htmlFor="size">Size: </label>
            <input id="size" onChange={newSize} type="number" value={inputs.size}></input>
            <br />
            <button>Add</button>
        </form >
    )
};

export default BoxForm;