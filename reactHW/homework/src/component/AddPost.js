import React, { useState } from 'react';

export default function AddPost(props) {

    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [bgcTitle, setbgcTitle] = useState('white');

    const validTitle = (element) => {
        //console.log(element.target.value);

        setTitle(element.target.value);

        if (element.target.value.length > 5) {
            setTitle(element.target.value);
            setbgcTitle('green');
        }
        else {
            setbgcTitle('white');
        }
    }

    const validInfo = (element) => {
        setInfo(element.target.value);
    }

    const addPostToArr = () => {
        props.add(title, info)
    }

    return (
        <div>
            <input onChange={validTitle} style={{ backgroundColor: bgcTitle }} placeholder="title" /><br />
            <input onChange={validInfo} placeholder="info" /><br />
            <button onClick={addPostToArr}> add post </button>

            <br />
            <br />

            <input onChange={(element) => { setTitle(element.target.value);} } placeholder="title" /><br />
            <input onChange={(element) => { setInfo(element.target.value); }} placeholder="info" /><br />
            <button onClick={() => { props.add(title,info)}}> add post </button>
        </div >

    )
}