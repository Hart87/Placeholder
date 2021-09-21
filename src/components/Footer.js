import React, { Component } from "react"


class Footer extends Component {


    render() {

        const user = this.props.user

        return (
            <footer class="footer mt-auto py-3 bg-light">
                <div class="container">
                    <center>
                    <a href={"mailto://"+ user.email } class="link-primary">{user.email}</a>
                    <span>  |  </span>
                    <a href={"tel://"+ user.phone } class="link-primary">{user.phone}</a>
                    <span>  |  </span>
                    <a href={"https://"+ user.website } class="link-primary">{user.website}</a>
                    </center>
                </div>
            </footer>
        )
    }
}

export default Footer
