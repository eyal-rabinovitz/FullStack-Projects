import React from 'react'
import ProductLogo from './ProductLogo';
import { Link } from 'react-router-dom';

export default function RoomInfo(props) {
    function addProduct() {
        props.setPage(2);
    }

    return (
        <div>
            <h3>Name : {props.element.name}</h3>
            <h3>Type : {props.element.roomType}</h3>

            {(props.element.products).map((element) => {
                return <ProductLogo element={element} />
            })}

            <br/><br/>
            <button onClick={addProduct}> Add product </button>

            <br /><br />
            <Link to='/'> <button> Back </button> </Link>
        </div>
    )
}