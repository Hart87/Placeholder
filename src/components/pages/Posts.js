import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "../../util/Spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Posts extends Component {


    state = { posts: [],
             user : this.props.user 
            }

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + this.state.user.id)
        console.log(result.data)
        await new Promise(x => setTimeout(x, 2000))
        this.setState({ posts: result.data });
        this.popToast()
        
    }

    popToast() {
        toast.info( "Found " + this.state.posts.length + " posts!", {
            closeOnClick: true,
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoClose: 5000 
          })
    }

    clickMe(post){
        toast.warning( post.title, {
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
            <h1>Posts </h1>
            <br></br>
            {this.state.posts.length > 0 ? ( 
            <div>
                {this.state.posts.map((post)=> (
                    <ol class="list-group">
                        <a onClick={this.clickMe.bind(this, post)}>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">{post.title}</div>
                                <br></br>
                                {post.body}
                            </div>
                            <span class="badge bg-primary rounded-pill">{post.id}</span>
                        </li>
                        </a>
                        <br></br>
                        <br></br>
                    </ol>
                    ))}
            </div>
            ) : (
                <Spinner />
            )}
            </div>
        )

    }
}

export default Posts