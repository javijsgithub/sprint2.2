// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    let product = products.find(item => item.id === id);

  if (product) {
    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      cartItem.quantity++;
    } 
    else {
      cart.push({ ...product, quantity: 1 });
    }

   console.log(product.name + " añadido al carrito");

    calculateTotal();
    applyPromotionsCart();
    printCart();
  } 
}
   
    


// Exercise 2
function cleanCart() {

    cart = [];
    total = 0;

    console.log("Carrito vaciado correctamente");

    printCart();
}



// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    printCart();
}
  



// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

        for (let i = 0; i < cart.length; i++) {

          let item = cart[i];

          if (item.id === 1 && item.quantity >= 3) {
            // Si el producto tiene id 1 y la cantidad es 3 o más, se aplica un descuento del 20%
            var discountedPrice = item.price * 0.8;
            item.price = discountedPrice.toFixed(2);
        } else if (item.id === 3 && item.quantity >= 10) {
            // Si el producto tiene id 3 y la cantidad es 10 o más, se aplica un descuento del 30%
            var discountedPrice = item.price * 0.7;
            item.price = discountedPrice.toFixed(2);
        }
    }
    printCart();
}
      


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    var cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';

    cart.forEach(function (item) {
        var cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartList.appendChild(cartItem);
    });

    document.getElementById('total_price').textContent = total.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  calculateTotal();
  applyPromotionsCart();
  printCart();
    
}


function open_modal() {
// Recorrer el carrito y agregar filas al modal
printCart();
   
}