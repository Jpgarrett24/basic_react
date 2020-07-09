import React, { useState } from 'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;

    const update = (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value,
        });
    };
    return (
        <>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" onChange={update} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={update} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={update} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={update} />
                <br />
                <label htmlFor="confirm">Confirm Password:</label>
                <input type="password" id="confirm" onChange={update} />
            </form>
        </>
    )
};

export default UserForm;