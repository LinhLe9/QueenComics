const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
      cart.push({ product, price });
      updateCart();
}
function removeFromCart(index) {
       cart.splice(index, 1);
       updateCart();
}

function updateCart() {
// save the data
       localStorage.setItem('cart', JSON.stringify(cart));
       renderCart();
}

function renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <span>${item.product}</span>
                    <span>$${item.price}</span>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Erased</button>
                `;
                cartItems.appendChild(div);
          });

          cartTotal.textContent = `Total: $${total}`;
}

renderCart();
