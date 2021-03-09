function getProducts() {
  fetch("http://127.0.0.1:5000/show-products/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let list = document.getElementById("items");
      console.log(list);
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
