import React from "react"

const Box = (props) => {
    const { color, width, height } = props.box;
    return (
        <div style={{
            backgroundColor: color,
            width: width,
            height: height,
            display: "inline-block",
            margin: "5px",
        }}></div>
    )
}
export default Box