    let totalPrice = 0;

    // show cart box
    function openCart() {
        document.getElementById('cart-box').style.display='block'; 
    }

    // hide cart box
    function closeCart() {
        document.getElementById('cart-box').style.display='none'; 
    }

    // create a div element to show cart item
    function addToCart(productName, productPrice) {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `${productName} €${productPrice}
			<button class="close-btn" onclick="removeItem(this, ${productPrice})"> x </button>`;

        
        document.getElementById('cart-items').appendChild(cartItem);
        totalPrice += productPrice;
        document.getElementById('total-price').textContent = totalPrice.toFixed(2); 
        openCart();
    }

    // Remove  item
    function removeItem(button, productPrice) {
        button.parentElement.remove();
        totalPrice -= productPrice;
        document.getElementById('total-price').textContent = totalPrice;


        if (document.getElementById('cart-items').children.length === 0) {
            closeCart(); 
        }
    }



function showMessageSpiderMan() {
document.getElementById('demo').innerHTML = "Swing through the streets of New York with the world's most beloved superhero. Witness Peter Parker's incredible journey of courage, responsibility, and extraordinary power as he battles villains, balances life, and protects those who cannot protect themselves.";
}

function showMessageAvenger() {
document.getElementById('demo2').innerHTML = "Join a team of unlikely heroes as they rise to protect the world from apocalyptic threats. With unmatched powers, deep alliances, and epic battles, the AVENGER team stands as Earth's final line of defense. Experience their journey of courage, sacrifice, and the unbreakable bond that makes them stronger together.";
}

function showMessageVenom() {
document.getElementById('demo3').innerHTML = "Unleash the symbiote's dark power in this thrilling, gritty saga. Follow Eddie Brock as he battles inner demons and outer threats while bonded to the alien symbiote that gives him extraordinary abilities. With a twisted sense of justice and an unyielding hunger, VENOM is an anti-hero unlike any other—fighting both for redemption and survival in a world that fears him.";
}

function showMessageHulk() {
document.getElementById('demo4').innerHTML = "Smash your way through the explosive world of Bruce Banner, a man cursed with an unstoppable rage. When anger turns him into the mighty HULK, chaos erupts, and nothing can stand in his way. Witness the struggle between man and monster, as Banner fights to control the beast within while facing foes that threaten the very fabric of reality. HULK isn’t just about power—it's about the battle for identity, survival, and the limits of human strength.";
}
