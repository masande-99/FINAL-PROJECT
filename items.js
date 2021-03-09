const url = "http://127.0.0.1:5000/show-users/";

const ul = document.getElementById("ul");

function fetchUser() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data); //check if parameter is working
    });
}
fetchUser();

function login() {
  let inputs = document.getElementsByTagName("input");

  let eml = inputs[0].value;
  let pswrd = inputs[1].value;
  console.log(eml);
  console.log(pswrd);
  let loggedIn = users.filter((user) => {
    return user.email == eml && user.password == pswrd ? true : false;
  });
  newFunction(loggedIn);

  function newFunction(loggedIn) {
    console.log(loggedIn);
  }
}

function getProducts() {
  fetch("http://127.0.0.1:5000/show-products/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let list = document.getElementById("myproducts");
      console.log(list);
      data.forEach((product) => {
        let item = `
            <div id="row3" class= "card" >
            <div class="column3">
              <img class=image src=${product.images} />
              <h4>${product.product_name}</h4>
              <h4>${product.brand_name}</h4>
              <h4>${product.price}</h4>
              <p><button onclick="addTocart()">Add to Cart</button></p>
            </div>
            </div>
          `;
        list.innerHTML += item;
      });
    });
}
getProducts();

function addTocart() {
  var product = {
    "${product.product_image}": 1,
    "${product.product_name": 2,
    "${product.brand_name}": 3,
    "${product.price}": 3,
  };
  // localStorage.setItem("Product", JSON.stringify(product));
  // var retrievedObject = localStorage.getItem("product");
  // console.log("retrievedObject: ", JSON.parse(retrievedObject));
  window.localStorage.setItem("product", JSON.stringify(product));
  window.localStorage.getItem("product");
  JSON.parse(window.localStorage.getItem("product"));
}

addTocart();

function toggleModal() {
  document.getElementById("modal").classList.toggle("active");
}

// // Get data from localStorage
// let cart = JSON.parse(localStorage.getItem("cart"));
// cart ? cart : (cart = []);

// function updateCartLink() {
//   document.getElementById("cart-link").innerHTML = `Cart(${cart.length})`;
// }
// updateCartLink();

// // Check if cart content is available

// let cartContent = document.getElementById("cart-content");
// console.log(cartContent);

// function renderCart() {
//   // Get data from localStorage
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cartContent.innerHTML = "";
//   if (cartContent) {
//     cartContent.innerHTML = `
//             <h1 style="text-align:center;">Cart</h1>
//             <table style="text-align: left">
//                 <thead style="background: #bebebe">
//                     <tr class="test">
//                         <th class=""imgcart">Image</th>
//                         <th class="namecart">Name</th>
//                         <th class="catcart">Category</th>
//                         <th class="pricecart">Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${renderCartItems()}
//                 </tbody>
//             </table>
//         `;
//   }
//   console.log("Cart Rendered");
// }

// renderCart();

// function renderCartItems() {
//   console.log("Rendering Cart Items");
//   let content = "";
//   cart.forEach((item) => {
//     content += `
//             <tr>
//                 <td><img src=${item.image} alt=${item.name}/></td>
//                 <td>${item.name}</td>
//                 <td>${item.category}</td>
//                 <td>${item.price}</td>
//                 <td class="removeBtn"><button type="button" onclick="remove(${item.id})"> Remove from cart </button></td>
//             </tr>

//         `;
//   });

//   return content;
// }

// function add() {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   cart ? cart : (cart = []);
//   cart.push(selectedProduct);
//   console.log(cart);
//   document.getElementById("cart-link").innerHTML = `Cart(${cart.length})`;
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function remove(id) {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   // cart = JSON.parse(cartItem);
//   console.log(cart);

//   let cartMinusItem = cart.filter((item) => {
//     return item.id !== id;
//   });

//   localStorage.setItem("cart", JSON.stringify(cartMinusItem));

//   console.log("Removing item from cart");
//   renderCart();
//   window.location.href = "./cart.html";
// }

// function clearCart() {
//   localStorage.removeItem("cart"); //clear local storage data
// }

// function createCart() {
//   let inCart;

//   let cart = localStorage.getItem("cart");
//   console.log("Whats in your cart?", JSON.parse(cart));
// }

// function showCart() {
//   let added = document.getElementById("cartItem");
// }
