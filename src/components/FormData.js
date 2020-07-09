import React, { useState } from 'react';

const FormData = (props) => {
    return (
        <>
            <h4>Your Form Data</h4>
            <p>First Name: {props.inputs.firstName}</p>
            <p>Last Name: {props.inputs.lastName}</p>
            <p>Email: {props.inputs.email}</p>
            <p>Password {props.inputs.password}</p>
            <p>Confirm Password: {props.inputs.confirm}</p>
        </>
    )
}

export default FormData;