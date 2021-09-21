import React, { Component } from "react"

class Home extends Component {

    

    render() {

        const user = this.props.user 

        function ButtonLogic() {
            window.alert("Does Something")
        }

        return (
            <div class ="container">
                <br></br>
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">{user.name}</h1>
                        <p class="lead text-muted">This is a demo ReactJS project for use with the JSONPlaceholder API. You are staticly logged in as user #3.</p>
                        <h5>{user.company.name + ": " + user.company.bs}</h5>
                        <p>
                        <br></br>
                        <button type="button" className="btn btn-primary" onClick={ButtonLogic}>Main call to action</button>
                        <br></br>
                        </p>
                    </div>
                </div>
                
            </div>
             
             
             
        )
    }
}

export default Home
