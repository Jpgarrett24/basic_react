import React, { useState } from "react"

const UserForm = props => {
    const { users, setUsers } = props;

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmError: "",
        submitError: "",
    })

    const validateFirstName = (firstName) => {
        firstName.length > 1 || firstName.length === 0 ?
            setUser({ ...user, firstNameError: "", firstName: firstName }) :
            setUser({ ...user, firstNameError: "First name must have at least 2 characters" })
    }
    const validateLastName = (lastName) => {
        lastName.length > 1 || lastName.length === 0 ?
            setUser({ ...user, lastNameError: "", lastName: lastName }) :
            setUser({ ...user, lastNameError: "Last name must have at least 2 characters" })
    }
    const validateEmail = (email) => {
        email.length > 4 || email.length === 0 ?
            setUser({ ...user, emailError: "", email: email }) :
            setUser({ ...user, emailError: "Email address must be at least 5 characters long" })
    }
    const validatePassword = (password) => {
        password.length > 7 || password.length === 0 ?
            setUser({ ...user, passwordError: "", password: password }) :
            setUser({ ...user, passwordError: "Password must be at least 8 characters long." })
    }

    const validateConfirm = (confirm) => {
        confirm === user.password || confirm.length === 0 ?
            setUser({ ...user, confirmError: "", confirm: confirm }) :
            setUser({ ...user, confirmError: "Passwords must match." })
    }

    const update = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value,
        });
        if ([event.target.id] == 'firstName') {
            validateFirstName(event.target.value)
        }
        else if ([event.target.id] == 'lastName') {
            validateLastName(event.target.value)
        }
        else if ([event.target.id] == 'email') {
            validateEmail(event.target.value)
        }
        else if ([event.target.id] == 'password') {
            validatePassword(event.target.value)
        }
        else {
            validateConfirm(event.target.value)
        };
    }

    const submit = (event) => {
        event.preventDefault()
        if (user.firstNameError || user.lastNameError || user.emailError || user.passwordError || user.confirmError) {
            setUser({ ...user, submitError: "Invalid inputs, cannot complete registration." })
        }
        else if (user.firstName === "" || user.lastName === "" || user.email === "" || user.password === "" || user.confirm === "") {
            setUser({ ...user, submitError: "Invalid inputs, cannot complete registration." })
        }

        else {
            let newUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                confirm: user.password
            };
            setUsers(users.concat(newUser))
        };
    };


    return (
        <>
            <form onSubmit={submit}>
                <label htmlFor="firstName">First Name: <small style={{ color: "red" }}><b>{user.firstNameError}</b></small></label>
                <input id="firstName" onChange={update} type="text" />
                <br />
                <label htmlFor="lastName">Last Name: <small style={{ color: "red" }}><b>{user.lastNameError}</b></small></label>
                <input id="lastName" onChange={update} type="text" />
                <br />
                <label htmlFor="email">Email: <small style={{ color: "red" }}><b>{user.emailError}</b></small></label>
                <input id="email" onChange={update} type="text" />
                <br />
                <label htmlFor="password">Password: <small style={{ color: "red" }}><b>{user.passwordError}</b></small></label>
                <input id="password" onChange={update} type="password" />
                <br />
                <label htmlFor="confirm">Confirm Password: <small style={{ color: "red" }}><b>{user.confirmError}</b></small></label>
                <input id="confirm" onChange={update} type="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p style={{ color: "red" }}><b>{user.submitError}</b></p>
        </>
    );
}

export default UserForm