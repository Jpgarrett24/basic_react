import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            <section>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </section>
        )
    }
}

export default PersonCard;