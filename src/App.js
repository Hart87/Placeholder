import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-2"><h1>Types</h1></div>
          <div class="col-sm-10"><center><h1>Body</h1></center></div>
        </div>
      </div>
    </div>
  );
}

export default App;
