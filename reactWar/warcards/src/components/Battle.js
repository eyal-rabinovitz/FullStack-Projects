import React from 'react'
import Card from './Card.js';

export default function Battle(props) {

    const next = () => {
        if (props.computerCard > props.userCard) {
            props.next(1);
        }
        else if (props.userCard > props.computerCard) {
            props.next(-1);
        }
        else {
            props.next(0);
        }
    }

    return (
        <div>
            <div> Computer </div>

            <Card number={props.computerCard} />
            <Card number={props.userCard} />

            <div> {props.name} </div>
            <br />
            <button onClick={next}> Next </button>
        </div>
    )
}
