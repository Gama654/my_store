let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} ريال`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  total.textContent = `المجموع: ${totalPrice} ريال`;
  cartCount.textContent = cart.length;
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cart-panel').classList.toggle('active');
}