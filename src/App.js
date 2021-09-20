import React, { Component } from "react"
import axios from "axios"
import Header from "./components/Header"
import Home from "./components/Home"


class App extends Component {

  state = { user : null  }

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users/3")
    console.log(result)
    this.setState({ user: result.data });
}

  render() {
  return (
    <div className="App">
      <Header />
        <div class="row">
          <div class="col-sm-2">
            <h1>Posts</h1>
            <h1>Photos</h1>
            <h1>Albums</h1>
            <h1>Todos</h1>
          </div>
          <div class="col-sm-10">
            <div class="container">
              <Home />
            </div>
          </div>
        </div>
    </div>
  );
  }
}

export default App;
