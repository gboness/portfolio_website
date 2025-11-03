        // Retrieve cart data from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartContainer = document.getElementById("cartItems");
        let total = 0;

        // Display each item
        cart.forEach(item => {
            let div = document.createElement("div");
            div.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartContainer.appendChild(div);
            total += item.price;
        });

        // Display total
        document.getElementById("totalPrice").innerText = `Total: $${total.toFixed(2)}`;



        // Clear cart function
        function clearCart() {
            localStorage.removeItem("cart");
            // Optionally clear any in-memory cart variable
            cart = [];
            // Reload to update UI
            location.reload();
        }

        // Attach event listener if button exists (defensive)
        const clearBtn = document.getElementById("clearCart");
        if (clearBtn) {
            clearBtn.addEventListener("click", clearCart);
        }