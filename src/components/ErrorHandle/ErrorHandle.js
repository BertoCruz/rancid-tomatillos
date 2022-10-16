import React from "react"
import './ErrorHandle.css'

const ErrorHandle = (props) => {
    const error = props.errorStatus;
    console.log("PROPS.ERRORSTATUS===", props);
    return (
        <main className="error-handling">
            {/* <h2>{props.errorStatus.status} : {props.errorStatus.statusText}</h2> */}
            <h2>{props.errorStatus}</h2>
            <p>Please refresh the page</p>
        </main>
    )
}

export default ErrorHandle