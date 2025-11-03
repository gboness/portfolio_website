// Function to add badge to "cart" in nav bar when item is added

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sizeForm');
    const furia = document.getElementById('furiaForm');
    const instinct = document.getElementById('instinctForm');

    const cartBadge = document.getElementById('cartBadge');
    let cartCount = 0;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission
      
      // Increment cart count
      cartCount++;
      
      // Update badge and show it
      cartBadge.textContent = cartCount;
      cartBadge.classList.add('active');
  
      // Optional: Reset form fields
      form.reset();
    });

    furia.addEventListener('submit', function(e) {
      e.preventDefault();

      cartCount++;

      cartBadge.textContent = cartCount;
      cartBadge.classList.add('active');

      form.reset();
    });

    instinct.addEventListener('submit', function(e) {
      e.preventDefault();

      cartCount++;

      cartBadge.textContent = cartCount;
      cartBadge.classList.add('active');

      form.reset();
    });

  });


function addToCart(shoeName, price) {
    // Retrieve the existing cart from localStorage or create a new array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item
    cart.push({
        name: shoeName,
        price: price
    });

    // Save it back into localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    }