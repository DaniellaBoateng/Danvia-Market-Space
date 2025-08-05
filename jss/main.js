// Toggle mobile menu
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cart logic
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - GHS ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

// Delivery form submission
const deliveryForm = document.getElementById('deliveryForm');

if (deliveryForm) {
  deliveryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Delivery details submitted successfully!');
    deliveryForm.reset();
  });
}
