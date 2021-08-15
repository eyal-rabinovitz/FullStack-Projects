import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"

export default function AddRoom(props) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('white');
    let history = useHistory()

    function checkName(element) {
        if (element.target.value.length > 5) {
            alert('error');
            history.push("/");
        }
        else {
            setName(element.target.value);
        }
    }

    function createRoom() {
        if (name.length < 1) {
            alert('error');
        }
        else {
            props.addNewRoom(name, color, document.getElementById("select").value);
        }
    }

    return (
        <div>
            <select name="choice" id="select">
                <option value="bedroom" defaultValue>bedroom</option>
                <option value="bathroom">bathroom</option>
                <option value="kitchen">kitchen</option>
            </select>
            <br />
            <input onChange={checkName} type="text" id="name" placeholder="name"></input>
            <br/>
            <input onChange={e => setColor(e.target.value)} type="text" id="color" placeholder="color"></input>
            <br />
            <Link to='/'><button onClick={createRoom}> create </button></Link>
        </div>
    )
}
