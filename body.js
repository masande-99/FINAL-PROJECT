function getProducts() {
  fetch("https://final-project2021.herokuapp.com/show-items/")
    .then((res) => res.json())
    .then((data) => {
      let list = document.getElementById("items");

      data.forEach((product) => {
        let item = `
              <div id="row3" class= "card" >
              <div class="column3">
                <img class=image src=${product.images} />
                <h4>${product.product_name}</h4>
                <h4>${product.brand_name}</h4>
                <h4>${product.price}</h4>
                <p><a href="details.html"><button>Click to see product details</button></a></p>
              </div>
              </div>
            `;
        list.innerHTML += item;
      });
    });
}
getProducts();
