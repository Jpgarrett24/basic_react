import React, { useState } from "react";

const BoxForm = (props) => {
    const { boxes, setBoxes } = useState(props.boxes);

    let box = {
        color: "",
        height: "100px",
        width: "100px",
    }

    const newBox = (event) => {
        box.color = event.target.value;
    }

    const newSize = (event) => {
        [box.height, box.width] = [event.target.value, event.target.value];
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setBoxes([box]);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color: </label>
                <input type="text" id="color" onChange={newBox} />
                <br />
                <label htmlFor="size">Size:</label>
                <input type="number" id="size" onChange={newSize} />
                <br />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default BoxForm;