import React, { Component } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Home from "./components/Home"


class App extends Component {

  state = { user : null  }

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users/3")
    console.log(result)
    this.setState({ user: result.data });
    //toast for UI
    toast.success( "logged in as: " + this.state.user.name, {
      closeOnClick: true,
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: false,
      autoClose: 5000 
    })
  }



  render() {
  return (
    <div className="App">
      <Header user={this.state.user}/>
      <ToastContainer/>
        <div class="row">
          <div class="col-sm-2">
            <h1>Posts</h1>
            <h1>Photos</h1>
            <h1>Albums</h1>
            <h1>Todos</h1>
          </div>
          <div class="col-sm-10">
            <div class="container">
              <Home user={this.state.user}/>
            </div>
          </div>
        </div>
    </div>
  );
  }
}

export default App;
