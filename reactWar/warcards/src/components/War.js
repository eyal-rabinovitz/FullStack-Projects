import React, { useState } from 'react'
import Battle from './Battle.js';

export default function War(props) {
    const [computerWins, setComputerWins] = useState(0);
    const [userWins, setUserWins] = useState(0);

    const [computerDeck, setComputerDeck] = useState(props.deckCards.slice(0, 26));
    const [userDeck, setUserDeck] = useState(props.deckCards.slice(26));
    
    const [computerCard, setComputerCard] = useState(computerDeck[0]);
    const [userCard, setUserCard] = useState(userDeck[0]);

    const next = (num) => {
        switch (num) {
            case 1:
                setComputerWins(computerWins+1);
                break;
            case -1:
                setUserWins(userWins + 1);
                break;
            case 0:
                break;
            default:
            // code block
        }
        
        if (!computerDeck.length || !userDeck.length) {
            if (computerWins > userWins) {
                props.setNumOfLosses(props.numOfLosses+1);
            }
            else if (userWins > computerWins) {
                props.setNumOfWins(props.numOfWins+1);
            }
            props.setPage(3);
        }

        setComputerCard(computerDeck.shift());
        setUserCard(userDeck.shift());
        //console.log(computerDeck);
        //console.log(userDeck);
    }

    return (
        <div>
            <h1> WAR Page welcom {props.name}</h1>
            <Battle computerCard={computerCard} userCard={userCard} name={props.name} next={next} />
        </div>
    )
}
