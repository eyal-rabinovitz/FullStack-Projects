import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import AddRoom from './components/AddRoom.js';
import RoomMain from './components/RoomMain.js';

function App() {
    const [roomsArr, setRoomsArr] = useState([]);
    const [roomUrl, setRoomUrl] = useState("/room");

    class Room {
        constructor(name, color, roomType, products) {
            this.name = name;
            this.color = color;
            this.roomType = roomType;
            this.products = products;
        }
    }

    class Product {
        constructor(productType, isOn) {
            this.productType = productType;
            this.isOn = isOn;
        }

        turn() {
            this.isOn = !this.isOn;
        }
    }

    const addNewRoom = (name, color, type) => {
        let newRoom = new Room(name, color, type, []);
        setRoomsArr([...roomsArr, newRoom]);
    }

    const addProductfunc = (productType, index) => {
        if (roomsArr[index].products.length < 5) {
            let newProduct = new Product(productType, false);
            let newArr = [...roomsArr];

            newArr[index].products.push(newProduct);
            setRoomsArr(newArr);
        }
        else {
            alert('error');
        }
    }

    return (
        <div className="App">
            <h2>Smart Home</h2>

            <Router>
                <Switch>
                    <Route exact path='/' component={() => {
                        return <Home roomsArr={roomsArr} setRoomUrl={setRoomUrl} />
                    }} />

                    <Route exact path='/addroom' component={() => {
                        return <AddRoom addNewRoom={addNewRoom} />
                    }} />

                    <Route exact path='/room'>
                        <RoomMain addProductfunc={addProductfunc} />
                    </Route>

                    <Route exact path={roomUrl}>
                        <RoomMain addProductfunc={addProductfunc} />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
