import React, { useState } from "react";

const Box = (props) => {
    const { color, height, width } = props.box;

    return (
        <>
            <section style={{
                backgroundColor: color,
                height: height,
                width: width,
                display: "inline-block",
                margin: "1%"
            }}></section>
        </>
    )
}

export default Box;