import React, { useState } from "react"

const BoxForm = (props) => {
    const { boxes, setBoxes } = props
    const [color, setColor] = useState('hello')
    const [size, setSize] = useState('30')

    let box = {
        color: "",
        width: "100px",
        height: "100px",
    };

    const newColor = (event) => {
        box.color = event.target.value;
        setColor(event.target.value);
    };

    const newSize = (event) => {
        box.width = `${event.target.value}px`;
        box.height = `${event.target.value}px`;
        setSize(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log(box);
        event.preventDefault();
        setBoxes([...boxes, box]);
        setColor("");
        setSize("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input id="color" onChange={newColor} type="text" value={color}></input>
            <br />
            <label htmlFor="size">Size: </label>
            <input id="size" onChange={newSize} type="number" value={size}></input>
            <br />
            <button>Add</button>
        </form >
    )
};

export default BoxForm;