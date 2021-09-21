import React, { Component } from "react"

class Sidebar extends Component {

    render() {

        const user = this.props.user 

        return (
            <div>
                <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span class="fs-4">Sidebar</span>
                    </a>
                    <hr></hr>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link link-dark" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                                Albums
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                                Photos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                                Posts
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                                Todos
                            </a>
                        </li>
                        </ul>
                    
                  </div>
            </div>
        )
    }
}

export default Sidebar