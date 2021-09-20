import React, { Component } from "react"

class Sidebar extends Component {

    render() {

        const user = this.props.user 

        return (
            <div class = "container">
                <h1>Posts</h1>
                <h1>Photos</h1>
                <h1>Albums</h1>
                <h1>Todos</h1>
            </div>
        )
    }
}

export default Sidebar