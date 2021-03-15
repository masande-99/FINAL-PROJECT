let users = [];
//fetching from database the users
fetch("https://final-project2021.herokuapp.com/show-users/")
  .then((res) => res.json())
  .then((data) => {
    users = data;
  });
//sign in function
function signUsers() {
  const form = document.getElementById("sign-users");
  let inputs = form.getElementsByTagName("input");

  let nam = inputs[0].value;
  let mail = inputs[1].value;
  let usernme = inputs[2].value;
  let pasword = inputs[3].value;

  let loggedIn = users.filter((user) => {
    return (
      user.fullname == nam &&
      user.email == mail &&
      user.username == usernme &&
      user.password == pasword
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
