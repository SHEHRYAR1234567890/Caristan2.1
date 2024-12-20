// Retrieve cart data from localStorage (if available)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

// Function to update the order summary on the checkout page
function updateOrderSummary() {
    const cartSummaryItems = document.getElementById('cart-summary-items');
    const orderTotal = document.getElementById('order-total');

    // Clear current cart summary
    cartSummaryItems.innerHTML = '';

    // If there are items in the cart, display them
    if (cart.length === 0) {
        cartSummaryItems.innerHTML = '<li>No items in cart</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
            cartSummaryItems.appendChild(li);
        });
    }

    // Update the total price
    orderTotal.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Handle the form submission
document.getElementById('shipping-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;

    if (fullName && address && city && state && zip && phone) {
        alert(`Order placed successfully! \n\nName: ${fullName} \nAddress: ${address}, ${city}, ${state} ${zip} \nPhone: ${phone}\nTotal: $${totalAmount.toFixed(2)}`);
        
        // Clear cart and total data after successful order
        localStorage.removeItem('cart');
        localStorage.removeItem('totalAmount');

        // Redirect to a confirmation or home page
        window.location.href = "index.html"; // Redirecting back to home
    } else {
        alert('Please fill out all the shipping details.');
    }
});

// Initialize the page with the order summary
updateOrderSummary();
