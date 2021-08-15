import React from 'react'

export default function AddProduct(props) {
    function addNewProduct() {
        let productType = document.getElementById("select").value;

        switch (productType) {
            case "stereo":
                if (!isExist(props.element.products, productType)) {
                    props.addProductfunc(productType, props.index);
                }
                break;
            case "boiler":
                if (props.element.roomType === "bathroom") {
                    props.addProductfunc(productType, props.index);
                }
                break;
            default:
                props.addProductfunc(productType, props.index);
            // code block
        }
        props.setPage(1);
    }

    function isExist(products, newProduct) {
        if (products.some(item => item.productType === newProduct)) {
            return true;
        }

        /*let newArr = products.filter((item) =>
            item.productType === newProduct);
        if (newArr.length > 0) {
            return true;
        }*/

        return false;
    }

    return (
        <div>
            <select name="choice" id="select">
                <option value="airconditioner" defaultValue>air conditioner</option>
                <option value="boiler">boiler</option>
                <option value="stereo">stereo</option>
                <option value="lamp">lamp</option>
            </select>
            <br />

            <button onClick={addNewProduct}> Add </button>
        </div>
    )
}
