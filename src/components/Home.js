import React, { Component } from "react"

class Home extends Component {


    render() {

        const theUser = this.props.user
        console.log(theUser)

        return (
             <h1 id="test">HOME</h1>
        )
    }
}

export default Home
