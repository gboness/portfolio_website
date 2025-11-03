function addToCart(item, price) {
    // Get the current cart from localStorage or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if item already exists in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if it exists
    } else {
      item.quantity = 1; // Add new item with quantity
      cart.push(item);
    }
  
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(`${item.name} added to cart`);
  }
  
  // Example usage: (on button click in product card)
  document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    addToCart({
      id: 1,
      name: "Product Name",
      price: 29.99
    });
  });