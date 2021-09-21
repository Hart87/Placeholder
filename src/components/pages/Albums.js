import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "../../util/Spinner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Albums extends Component {


    state = { albums: [],
             user : this.props.user 
            }

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + this.state.user.id)
        console.log(result.data)
        await new Promise(x => setTimeout(x, 2000))
        this.setState({ albums: result.data });
        this.popToast()
        
    }

    popToast() {
        toast.info( "Found " + this.state.albums.length + " albums!", {
            closeOnClick: true,
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoClose: 5000 
          })
    }

    clickMe(album) {
        toast.warning( album.title, {
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
            <h1>Albums </h1>
            <br></br>
            {this.state.albums.length > 0 ? ( 
            <div>
                {this.state.albums.map((album)=> (
                    <ul class="list-group">
                    <a onClick={this.clickMe.bind(this, album)}>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                            {album.title}
                            <span class="badge bg-primary rounded-pill">{album.id}</span>
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

export default Albums