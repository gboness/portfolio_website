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




// I think everything below this works??






// adding items to local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function addToCart(itemName, price) {
    let existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        name: itemName,
        price: price,
        quantity: 1
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  function displayCart() {
    const cartDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('total');
    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      cartDiv.innerHTML += `
        <p>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
      `;
    });

    totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
  }

  displayCart();
