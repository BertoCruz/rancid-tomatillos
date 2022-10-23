import React from "react"
import './ErrorHandle.css'
import tomatillo from '../../images/tomatillo.png'

const ErrorHandle = (props) => {
    const error = props.errorStatus;
    console.log("PROPS.ERRORSTATUS===", props);
    return (
        <main className="error-handling">
            {/* <h2>{props.errorStatus.status} : {props.errorStatus.statusText}</h2> */}
            <img className="tomatillo-animation" src={tomatillo} alt="tomatillo"></img>
            <h2 className='neonText'>{props.errorStatus}</h2>
            <p className='neonText'>Please refresh the page</p>
        </main>
    )
}

export default ErrorHandle