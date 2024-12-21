import {mount as mountProducts} from 'products/ProductIndex'
import {mount as mountCart} from 'cart/CartShow'
import 'cart/CartShow'

console.log("Ccontainer");

mountProducts(document.getElementById("my-products"))
mountCart(document.getElementById("my-cart"))