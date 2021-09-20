import React, { Component } from "react"

class Home extends Component {

    render() {

        const user = this.props.user 

        return (
            <div class ="container">
                <h1 id="test">{user.name}</h1>
            </div>
             
             
             
        )
    }
}

export default Home
