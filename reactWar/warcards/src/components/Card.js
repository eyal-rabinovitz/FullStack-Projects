import React from 'react'
import './Card.css';

export default function Card(props) {
    return (
        <div>

            <section className="cards">
                <section className="card card--heart" value={props.number}>
                    <div className="card__inner card__inner--centered">
                        <div className="card__column">
                    </div>
                </div>
            </section>
        </section>


        </div>
    )
}
