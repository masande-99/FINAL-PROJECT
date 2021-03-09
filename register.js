function registerUsers() {
  const form = document.getElementById("reg-users");
  const inputs = form.getElementsByTagName("input");
  const user = {
    name: inputs[0].value,
    email: inputs[1].value,
    username: inputs[2].value,
    password: inputs[3].value,
    address: inputs[4].value,
  };
  console.log(user);

  fetch("http://127.0.0.1:5000/add-new-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("You have been succesfully registered");
      console.log(json);
      //   window.location.href = "./index.html";
      document.getElementById("reg-users").reset();
    })
    .catch((err) => console.log(err));
}
