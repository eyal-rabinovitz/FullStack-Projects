import React, { useState } from 'react'
import './App.css';
import Home from './components/Home.js';
import War from './components/War.js';
import Final from './components/Final.js';

function App(props) {

    var deckCards = [];

    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [numOfWins, setNumOfWins] = useState(0);
    const [numOfLosses, setNumOfLosses] = useState(0);
    const [player, setPlayer] = useState({});


    const show = () => {
        switch (page) {
            case 1:
                return (<div>
                            <Home setName={setName} setPage={setPage} />
                        </div>)
            case 2:
                buildDeck();
                shuffle();
                return (<div>
                            <War name={name}
                                deckCards={deckCards}
                                numOfWins={numOfWins}
                                setNumOfWins={setNumOfWins}
                                numOfLosses={numOfLosses}
                                setNumOfLosses={setNumOfLosses}
                                setPage={setPage}/>
                        </div>)
            case 3:
                return (<div>
                           <Final win={numOfWins} loss={numOfLosses} again={again} />
                        </div>)
            default:
            // code block
        }
    }

    function again() {
        shuffle();
        setPage(2);
    }

    function buildDeck() {
        for (let i = 1; i <= 13; ++i) {
            for (let j = 0; j < 4; ++j) {
                deckCards.push(i);
            }
        }
    }

    function shuffle(){
        var currentIndex = deckCards.length;
        var randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [deckCards[currentIndex], deckCards[randomIndex]] =
                [deckCards[randomIndex], deckCards[currentIndex]];
        }
    }

  return (
    <div className="App">
          {show()}
    </div>
  );
}

export default App;
