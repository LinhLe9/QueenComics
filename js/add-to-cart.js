    let totalPrice = 0;

    // when to show cart box
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
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);;


        if (document.getElementById('cart-items').children.length === 0) {
            closeCart(); 
        }
    }
