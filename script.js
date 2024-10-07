// const cart = [];
// const cartCount = document.getElementById("cart-count");
// const cartItems = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");
// const cartSection = document.getElementById("cart-section");

// // Function to add items to the cart
// function addToCart(item) {
//     cart.push(item);
//     updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//     // Update item count
//     cartCount.textContent = cart.length;

//     // Update cart items list
//     cartItems.innerHTML = '';
//     let total = 0;

//     cart.forEach((item) => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - $${item.price}`;
//         cartItems.appendChild(li);
//         total += item.price;
//     });

//     // Update total price
//     cartTotal.textContent = total.toFixed(2);
// }

// // Event listener to add items to the cart
// document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const itemName = button.getAttribute('data-name');
//         const itemPrice = parseFloat(button.getAttribute('data-price'));

//         const item = {
//             name: itemName,
//             price: itemPrice
//         };

//         addToCart(item);
//     });
// });

// // Show/Hide cart when cart icon is clicked
// document.getElementById('cart-icon').addEventListener('click', () => {
//     cartSection.classList.toggle('hidden');
// });
const cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartSection = document.getElementById("cart-section");

// Function to add items to the cart
function addToCart(item) {
    cart.push(item);
    updateCart();
    saveCart();
}

// Function to update the cart display
function updateCart() {
    // Update item count
    cartCount.textContent = cart.length;

    // Update cart items list
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update total price
    cartTotal.textContent = total.toFixed(2);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cartItemsArray = JSON.parse(savedCart);
        cartItemsArray.forEach(item => {
            cart.push(item);
        });
        updateCart();
    }
}

// Event listener to add items to the cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        const item = {
            name: itemName,
            price: itemPrice
        };

        addToCart(item);
    });
});

// Show/Hide cart when cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', () => {
    cartSection.classList.toggle('hidden');
});

// Load the cart from localStorage when the page loads
loadCart();