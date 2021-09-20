import React, { Component } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Spinner from "../src/util/Spinner"


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
    if (!this.state.user) {
      return <Spinner />
    }
  return (
    <div className="App">
      <Header user={this.state.user}/>
      <ToastContainer/>
        <div class="row">
          <div class="col-sm-2">
            <Sidebar />
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
