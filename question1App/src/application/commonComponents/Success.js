import React, {useState} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";

export class Success extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            username:"Mark",
            childValue : "1A"
        }
    }

    changeChildValue = (newChildVal) =>{
        this.setState({childValue : newChildVal})
    }
    
    changeState(){
        this.setState({username:"Mark"})
    }

    render(){
        let name = "Mark";
        let address = {
            street:"1600 Pennsylvania Avenue NW",
            city:"Washington DC",
            country:"USA"
        }
        return(
        <>
            <div>
                <h2>Success! You're viewing the success component!</h2>
            </div>  
            <div>
                <h2>Current 'childVal': {this.state.childValue}</h2>
                <SuccessChild name={name} address={address}>
                    <SuccessStory callBack={this.changeChildValue}/>
                </SuccessChild>
            </div>
            <div>
                <h2>Current username state: {this.state.username}</h2>
            </div>
            <div>
                <button className={"form-control btn btn-primary col-md-1"} 
                                onClick={this.changeState} 
                                >Change Username/State</button>
            </div>
            <div>
            
            </div>
            
        </>
        )
    }
}