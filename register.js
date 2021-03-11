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

  fetch("https://final-project2021.herokuapp.com/add-new-user/", {
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

function searchButton() {
  const form = getElementById("search");
  const input = form.getElementsByTagName("input");

  const output = {
    serch: inputs[0].value,
  };
  console.log(output);

  if ((output = nike)) {
    return (window.location.href = "./item.html");
  } else {
    alert("Search not found");
  }

  if ((output = adidas)) {
    return (window.location.href = "./item.html");
  } else {
    alert("Search not found");
  }

  if ((output = puma && Puma)) {
    return (window.location.href = "./item.html");
  } else {
    alert("Search not found");
  }

  if ((output = contact)) {
    return (window.location.href = "./contact.html");
  } else {
    alert("Search not found");
  }
}
