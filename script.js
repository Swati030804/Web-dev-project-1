document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const addToCartBtn = document.querySelector(".add-to-cart-btn");

    let total = 0;

    // Add product to cart
    addToCartBtn.addEventListener("click", () => {
        const productName = document.querySelector(".product-title").innerText;
        const productPrice = parseFloat(
            document.querySelector(".product-price").innerText.replace("Price: $", "")
        );

        // Add item to cart list
        const listItem = document.createElement("li");
        listItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);

        // Update total
        total += productPrice;
        cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    });

    // Checkout functionality
    document.querySelector(".checkout-btn").addEventListener("click", () => {
        if (total === 0) {
            alert("Your cart is empty!");
        } else {
            alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
            cartItems.innerHTML = "";
            cartTotal.innerText = "Total: $0.00";
            total = 0;
        }
    });
});
