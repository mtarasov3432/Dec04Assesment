import React, { useState } from "react";

export default function SuccessChild(props){


    return(
    <>
        <div>
            <h2>SuccessChild Displaying: {props.name}'s Address is {props.address.street}, {props.address.city}, {props.address.country}</h2>
        </div>
        <div>
             {props.children}
        </div>
    </>
    )
}