
const cartLogo = document.querySelector('.cart_logo');
const shopCart = document.querySelector('.shop_cart');
const addToCartButtons = document.querySelectorAll('.btn-group button');
const itemCountElement = document.querySelector('.num_count');


let cartItems = [];
let itemCount = 0;

// Function to update the item count display
function updateItemCount() {
  itemCountElement.textContent = itemCount;
}

//
function toggleCart() {
  shopCart.style.display = shopCart.style.display === 'none' || shopCart.style.display === '' ? 'block' : 'none';
}

// Function to add an item to the cart
function addItemToCart(itemDetails) {
  cartItems.push(itemDetails);
  itemCount++;
  updateItemCount();
  renderCartItems();
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
  cartItems.splice(index, 1);
  itemCount--;
  updateItemCount();
  renderCartItems();
}

// Function to render the cart items in the shopping cart div
function renderCartItems() {
  shopCart.innerHTML = ''; 
  

  if (cartItems.length === 0) {
    shopCart.innerHTML = '<div class="empty_cart">Your cart is empty</div>';
  } else {
    cartItems.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
       <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="${"./img/food-img-9.webp"}" alt="Item Image" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
          <div style="flex: 1;">
            <h5>Delicious japanese food item
            
            <p>$19.45</p>

            </h5>
          </div>
          <button class="removeBtn" onclick="removeItemFromCart(${index})">Remove</button>
        </div>
      `;
      shopCart.appendChild(itemDiv);
    });
  }
}


cartLogo.addEventListener('click', toggleCart);

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemDetails = button.closest('.card').querySelector('.card-text').textContent.trim();
    addItemToCart(itemDetails);
  });
});

 