import React, { useState } from 'react'

export default function Home(props) {

    const [name, setName] = useState('');

    const validName = (element) => {
        setName(element.target.value);
    }
    
    const start = () => {
        if (name === '') {
            alert("please enter name");
        }
        else {
            props.setName(name);
            props.setPage(2);
        }
    }

    return (
        <div>
            <h1> Ready for WAR </h1>

            <input onChange={validName} placeholder="Enter your name" /><br /><br />

            <button onClick={start}> Start </button>

        </div>
    )
}
