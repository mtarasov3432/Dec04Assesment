import React, {useState} from "react";

export default function SuccessStory(props){
    let[childValue, setChildVal] = useState("")

    let sendChildValToParent = () =>{
        setChildVal("A Random Value")
        props.callBack(childValue)
    }

    return(
        <>
            <h2>SuccessStory is now working in SuccessChild</h2>
            <button onClick={()=>sendChildValToParent()}>Send Child Value To Parent</button>

        </>
    )
}