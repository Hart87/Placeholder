import React, { Component } from "react"

class Home extends Component {

    render() {

        const user = this.props.user 

        return (
             <h1 id="test">{user.name}</h1>
        )
    }
}

export default Home
