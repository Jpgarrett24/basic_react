import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor,
        }
    }

    render() {
        return (
            <>
                <section>
                    <h1>{this.state.lastName}, {this.state.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.state.hairColor}</p>
                </section>
                <button onClick={() => this.setState({ age: this.state.age += 1 })}>Birthday Button For {this.state.firstName} {this.state.lastName}</button>
            </>
        )
    }
}

export default PersonCard;