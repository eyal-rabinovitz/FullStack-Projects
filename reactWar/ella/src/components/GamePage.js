import React, {useState} from 'react'
import UserName from './UserName'

export default function GamePage(props) {

    const cards = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13]
    
    let cardCounter = 52
    const randomCardUser = Math.floor (Math.random ()*(cardCounter))
    const randomCardComputer = Math.floor (Math.random ()*(cardCounter))

    const [cardNum1,setCardNum1] = useState(cards[randomCardUser])
    const [cardNum2,setCardNum2] = useState(cards[randomCardComputer])


    let usersWins = 0
    let computerWins = 0

    const gamesRolls = () =>{
        if(randomCardUser === randomCardComputer){
            console.log("same index");
        }

        else if(cardCounter === 0){
            if(usersWins>computerWins){
                console.log("user wins");
            }
            else if(usersWins<computerWins){
                console.log("computer wins");
            }
            else{
                console.log("even");
            }
        }

        else{
            if(cardNum1>cardNum2){
                usersWins++
                cardCounter -= 2

                finalCardsPack1(cards)
            }

            else if(cardNum1<cardNum2){
                computerWins++
                cardCounter -= 2

                finalCardsPack1(cards)
            }

            else{
                cardCounter -= 2

                finalCardsPack1(cards)
            }
        }
      
        setCardNum1(cards[randomCardUser])
        setCardNum2(cards[randomCardComputer])

        console.log(cards);
        console.log(randomCardComputer);
        console.log(randomCardUser);
        console.log(cardCounter);
    }
    
    const finalCardsPack1 = (arr) => {
        return arr.splice(randomCardComputer,1) , arr.splice(randomCardUser,1)
    }

    return (
        <div>
            <p>computer</p>
            <p>{cardNum1}</p>
            <p>{cardNum2}</p>
            <p><UserName/></p>
            <button onClick={gamesRolls}>next</button>

        </div>
    )
}
