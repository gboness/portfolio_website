// Function to add badge to "cart" in nav bar when item is added

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sizeForm');
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
  });