import React from "react";
import { Success } from "./commonComponents/Success";

export default class Application extends React.Component {
    constructor(props) {
        super(props); 
    }
    render(){
        return(
            <>
                <div>
                    <h1>Welcome to Mark's App!</h1>
                    <h2>This is my Question 1 app</h2>
                </div>
                <div>
                    <Success username={this.state}/>
                </div>
            </>
        )
    }
}