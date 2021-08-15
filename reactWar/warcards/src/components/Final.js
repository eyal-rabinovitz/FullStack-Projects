import React from 'react'

export default function Final(props) {
    return (
        <div>
            <h1> win : {props.win} </h1>
            <h1> loss :  {props.loss} </h1>
            <br />
            <button onClick={props.again}> Again? </button>
        </div>
    )
}
