let users = [];

fetch("https://final-project2021.herokuapp.com/show-users/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function signUsers() {
  const form = document.getElementById("sign-users");
  let inputs = form.getElementsByTagName("input");

  let nam = inputs[0].value;
  let mail = inputs[1].value;
  let usernme = inputs[2].value;
  let pasword = inputs[3].value;
  console.log(nam);
  console.log(mail);
  console.log(usernme);
  console.log(pasword);
  let loggedIn = users.filter((user) => {
    return (
      users.fullname == nam &&
      users.email == mail &&
      users.username == usernme &&
      users.password == pasword
    );
  });

  console.log(loggedIn);

  if (loggedIn.length > 0) {
    alert("You are now logged in");
    window.location.href = "./item.html";
  } else {
    alert("Credentials invalid");
  }
}

// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
