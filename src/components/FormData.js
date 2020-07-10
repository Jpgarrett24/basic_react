import React, { useState } from 'react';

const FormData = (props) => {
    console.log(props.inputs[0]);
    if (props.inputs.length > 0) {
        return (
            <>
                <h4>New user successfully registered!</h4>
                <p>First Name: {props.inputs[0].firstName}</p>
                <p>Last Name: {props.inputs[0].lastName}</p>
                <p>Email: {props.inputs[0].email}</p>
                <p>Password {props.inputs[0].password}</p>
                <p>Confirm Password: {props.inputs[0].confirm}</p>
            </>
        );
    };
    return (
        <h4>Please submit form to display data</h4>
    );
};

export default FormData;