import React, { Component } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Spinner from "../src/util/Spinner"
import Albums from "./components/pages/Albums";
import Posts from "./components/pages/Posts";
import Todos from "./components/pages/Todos"
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 } from "react-router-dom";


class App extends Component {

  state = { user : null  }

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users/3")
    await new Promise(x => setTimeout(x, 2000))
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
      <Router>
        <Header user={this.state.user}/>
          <ToastContainer/>
          <Switch>
            <Route exact path="/" render={() => <Home user={this.state.user}/>} />
          </Switch>
          <Switch>
            <Route exact path="/pages/albums" render={() => <Albums user={this.state.user}/>} />
          </Switch>
          <Switch>
            <Route exact path="/pages/posts" render={() => <Posts user={this.state.user}/>} />
          </Switch>
          <Switch>
            <Route exact path="/pages/todos" render={() => <Todos user={this.state.user}/>} />
          </Switch>

      </Router>
      <Footer user={this.state.user}/>
    </div>
  );
  }
}

export default App;
