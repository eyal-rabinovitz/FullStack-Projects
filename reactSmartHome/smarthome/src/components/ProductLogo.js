import React, { useState } from 'react';

export default function ProductLogo(props) {
    const [render, setRender] = useState(false);

    function turnOn() {
        props.element.isOn = !props.element.isOn;
        setRender(!render);
    }
    return (
        <div id="root">
            <button id="b1" onClick={turnOn} style={{ backgroundColor: props.element.isOn ? "green" : "red" }}>
                {props.element.productType}
            </button>
        </div>
    )
}
