
import axios from 'axios';
import Noty from 'Noty';

let addToCart = document.querySelectorAll('.add-to-cart');  // array type
let cartCounter = document.ATTRIBUTE_NODE.querySelector('#cartCounter');
let updateCart = () => {
    // axios = library to make http request 
    axios.post('/update-cart', pizza).then(res => {
        console.log(res);
        cartCounter.innertext = res.data.totalQty;
        new Noty({
            text: 'Item added to cart',
            type: "success",

        }).show();

    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // server ko request bhejenge and pizza required add krenge. 
        let pizza = JSON.parse();
        updateCart(pizza);
    })
})