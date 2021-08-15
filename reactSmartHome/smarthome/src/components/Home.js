import React from 'react'
import { Link } from 'react-router-dom';
import RoomLogo from './RoomLogo.js';

export default function Home(props) {
    return (
        <div>
            {props.roomsArr.map((element, i) => {
                // + element.name
                props.setRoomUrl("/room" + element.name);
                return <Link to={{
                    pathname: "/room", // + element.name
                    state: {
                        element: element,
                        index: i,
                    },
                }}>
                    <button style={{ backgroundColor: element.color }}><RoomLogo element={element} /></button>
                </Link>
            })}

            <br />
            <Link to='/addroom'> <button> + </button> </Link>
        </div>
    )
}
