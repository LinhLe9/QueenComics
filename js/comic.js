let cart = [];
let totalPrice = 0;

// add item function
function addToCart(productName, price) {
    cart.push({ name: productName, price });
    totalPrice += price;
    toggleCart(true);
    updateCart();
}

// remove item function
function removeItem(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// update cart
function updateCart() {
const cartItemsDiv = document.getElementById('cart-items');
	cartItemsDiv.innerHTML = ''; 

// Add each item in the cart to the cart box
cart.forEach((item, index) => {
const div = document.createElement('div');
div.className = 'cart-item';
div.innerHTML = `
    <span>${item.name}</span>
    <span>€${item.price.toFixed(2)}</span>
    <span class="remove-icon" onclick="removeItem(${index})">&times;</span>`;

cartItemsDiv.appendChild(div);
   });

// Count total price
document.getElementById('total-price').innerText = totalPrice.toFixed	(2);
}

// Control the visibility of the cart box
function toggleCart(show) {
	const cartBox = document.getElementById('cart-box');
	if (show) {
		cartBox.classList.add('active'); 
	} else {
		cartBox.classList.remove('active'); 
	}
}



function showMessageSpiderMan() {
document.getElementById('demo').innerHTML = "Swing through the streets of New York with the world's most beloved superhero. Witness Peter Parker's incredible journey of courage, responsibility, and extraordinary power as he battles villains, balances life, and protects those who cannot protect themselves.";
}

function showMessageAvenger() {
document.getElementById('demo').innerHTML = "Join a team of unlikely heroes as they rise to protect the world from apocalyptic threats. With unmatched powers, deep alliances, and epic battles, the AVENGER team stands as Earth's final line of defense. Experience their journey of courage, sacrifice, and the unbreakable bond that makes them stronger together.";
}

function showMessageVenom() {
document.getElementById('demo').innerHTML = "Unleash the symbiote's dark power in this thrilling, gritty saga. Follow Eddie Brock as he battles inner demons and outer threats while bonded to the alien symbiote that gives him extraordinary abilities. With a twisted sense of justice and an unyielding hunger, VENOM is an anti-hero unlike any other—fighting both for redemption and survival in a world that fears him.";
}

function showMessageHulk() {
document.getElementById('demo').innerHTML = "Smash your way through the explosive world of Bruce Banner, a man cursed with an unstoppable rage. When anger turns him into the mighty HULK, chaos erupts, and nothing can stand in his way. Witness the struggle between man and monster, as Banner fights to control the beast within while facing foes that threaten the very fabric of reality. HULK isn’t just about power—it's about the battle for identity, survival, and the limits of human strength.";
}
