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
        // console.log(product.product_id);
        let item = `
            <div id="row3" class= "card" >
              <div class="column3">
                <img class="image" src=${product.images} />
                <h4>${product.product_name}</h4>
                <h4>${product.brand_name}</h4>
                <h4>${product.price}</h4>
                <p><button onclick="addTocart(${product.product_id})">Add to Cart</button></p>
              </div>
            </div>
          `;
        list.innerHTML += item;
      });
    });
}
getProducts();

function addTocart(id) {
  console.log(id);
  fetch("http://127.0.0.1:5000/show-products/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let list = document.getElementById("modal-body");
      // console.log(list);
      let item_json = data.filter((item) => {
        return item.product_id == id;
      });
      item_json.forEach((product) => {
        let item = `
        <div id="row3" class= "card" >
          <div class="column3">
            <img class=image src=${product.images} />
            <h4>${product.product_name}</h4>
            <h4>${product.brand_name}</h4>
            <h4>${product.price}</h4>
          </div>
        </div>
      `;
        list.innerHTML += item;
        window.localStorage.setItem("${product.images}", JSON.stringify(item));
        window.localStorage.getItem("item");
        JSON.parse(window.localStorage.getItem("product"));
        // console.log(item);
      });
    });
}

function toggleModal() {
  document.getElementById("modal").classList.toggle("active");
}
