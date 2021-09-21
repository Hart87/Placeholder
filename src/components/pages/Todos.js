import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "../../util/Spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Todos extends Component {


    state = { todos: [],
             user : this.props.user 
            }

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=" + this.state.user.id)
        console.log(result.data)
        await new Promise(x => setTimeout(x, 2000))
        this.setState({ todos: result.data });
        this.popInfoToast()
        
    }

    popInfoToast() {
        toast.info( "Found " + this.state.todos.length + " todos!", {
            closeOnClick: true,
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoClose: 5000 
          })
    }

    clickMe(todo) {
        toast.warning( todo.title, {
            closeOnClick: true,
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoClose: 5000 
          })
    }

    render() {

        return (
            <div class="container">
            <br></br>
            <h1>Todos </h1>
            <br></br>
            {this.state.todos.length > 0 ? ( 
            <div>
                {this.state.todos.map((todo)=> (
                    <ul class="list-group">
                    <a onClick={this.clickMe.bind(this, todo)}>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                            {todo.title}
                            <span class="badge bg-primary rounded-pill">{todo.id}</span>
                    </li>
                    </a>
                    <br></br>
                    </ul>
                    ))}
            </div>
            ) : (
                <Spinner />
            )}
            </div>
        )

    }
}

export default Todos