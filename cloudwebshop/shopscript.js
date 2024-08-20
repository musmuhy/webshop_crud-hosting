document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseInt(button.getAttribute('data-price'));

            addToCart(productName, productPrice);
        });
    });

    function addToCart(productName, productPrice) {
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <div>
                    <button class="remove" data-product-name="${item.name}">-</button>
                    <button class="add" data-product-name="${item.name}" data-product-price="${item.price}">+</button>
                    <button class="delete" data-product-name="${item.name}">Delete</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotalPrice();
    }

    function updateTotalPrice() {
        totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('total-price').textContent = totalPrice;
        document.getElementById('cart-count').textContent = cart.length;
    }

    function removeFromCart(productName) {
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity--;
            if (product.quantity <= 0) {
                deleteFromCart(productName);
            }
        }
        updateCart();
    }

    function deleteFromCart(productName) {
        cart = cart.filter(item => item.name !== productName);
        updateCart();
    }

    // Checkout and modal handling
    const checkoutButton = document.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            document.getElementById('checkout-modal').style.display = 'block';
        });
    }

    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            document.getElementById('checkout-modal').style.display = 'none';
        });
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById('checkout-modal')) {
            document.getElementById('checkout-modal').style.display = 'none';
        }
    }

    document.querySelectorAll('.payment-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert(`You have selected ${button.textContent} as your payment method.`);
            document.getElementById('checkout-modal').style.display = 'none';
        });
    });
});
