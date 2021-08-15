import React, { useState } from 'react';
import './Post.css';

export default function Post(props) {

    const [index, setIndex] = useState(props.index);



    return (
        <div>
            <span>
                <div class="post">
                    <div className='title'> {props.title}</div>
                    <div className='info'> {props.info}</div>
                    <button onClick={() => { props.deletePost(index) }} style={{ color: 'red' }}> delete </button>
                </div>
            </span>
            <br />
        </div >

    )
}