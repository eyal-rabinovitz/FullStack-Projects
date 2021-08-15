import React, { useState } from 'react';
import AddProduct from './AddProduct';
import RoomInfo from './RoomInfo';
import {BrowserRouter as Router,Switch,useLocation} from "react-router-dom";

export default function RoomMain(props) {
    const [page, setPage] = useState(1);
    const location = useLocation();
    const { element } = location.state;
    const { index } = location.state;

    const show = () => {
        switch (page) {
            case 1:
                return (<div>
                    <RoomInfo element={element} setPage={setPage} />
                </div>)
            case 2:
                return (<div>
                    <AddProduct element={element} addProductfunc={props.addProductfunc} setPage={setPage} index={index}/>
                </div>)
            default:
            // code block
        }
    }

    return (
        <div>
            {show()}
        </div>
    )
}
