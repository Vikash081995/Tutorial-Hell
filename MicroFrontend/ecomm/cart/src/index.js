import faker from 'faker';


const cartItem =`<div>${faker.commerce.productName()}</div>`;
document.querySelector("#cart-dev").innerHTML = cartItem;