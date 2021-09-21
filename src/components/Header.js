import React, { Component } from "react"
import { Link } from "react-router-dom"


class Header extends Component {

    render() {

        const user = this.props.user

        return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">JSONPlaceholder</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active">{"User #" + user.id}</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/pages/albums" class="nav-link">Albums</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pages/photos" class="nav-link">Photos</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pages/posts" class="nav-link">Posts</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pages/todos" class="nav-link">Todos</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
    }
}

export default Header