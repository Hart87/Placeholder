import React from "react"

const Spinner = (props) => {
    return (
        <div class="row">
            <div class="col">
                            
            </div>
            <div class="col">
            <div class="container">
                        <div class="spinner-grow text-danger" role="status">
                            <span class="sr-only"></span>
                        </div>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="sr-only"></span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>      
            </div>
            <div class="col">
                            
            </div>
        </div>
    )
}

export default Spinner