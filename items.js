const url = "https://final-project2021.herokuapp.com/show-users/";

const ul = document.getElementById("ul");

function fetchUser() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data); //check if parameter is working
    });
}
fetchUser();

function getProducts() {
  fetch("https://final-project2021.herokuapp.com/show-items/")
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
  fetch("https://final-project2021.herokuapp.com/show-items/")
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
