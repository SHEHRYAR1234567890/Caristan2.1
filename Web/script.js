let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    // Add product to cart
    cart.push({ productName, price });
    totalAmount += price;
    updateCartDisplay();
}

function removeFromCart() {
    // Clear the cart
    cart = [];
    totalAmount = 0;
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update the cart UI
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear current cart items
    cartItemsList.innerHTML = '';

    // If cart is empty, display message
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>No items in cart</li>';
    } else {
        // Populate cart items
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
        });
    }

    // Update total amount
    totalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}
