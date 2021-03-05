
const url ="http://127.0.0.1:5000/show-users/"

const ul = document.getElementById("ul")





function fetchUser(){
    fetch(url)
    .then((data)=>data.json())
    .then(data=>{
        console.log(data);//check if parameter is working
        
    });
} ;  
fetchUser()


function getProducts() {
    fetch("http://127.0.0.1:5000/show-products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let list = document.getElementById("myproducts");
        console.log(list);
        data.forEach((product) => {
          let item = `
            <div class= "card" >
              <img src=${product.images} />
              <h4>${product.product_name}</h4>
            </div>
          `;
          // console.log(item);
          list.innerHTML += item;
        });
    });
}
  getProducts();