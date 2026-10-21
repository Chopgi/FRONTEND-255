addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#registerBtn")
    .addEventListener("click", registerUser);
});
//add the user to the database | it has to be async because we are calling data outside our server

async function registerUser() {
  //create a body that will be converted into a JSON string and sent to the server.
  document.querySelector("#errorMsg").innerHTML = "";
  const userBody = {
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value,
    status: document.querySelector("#status").value,
  };

  const response = await fetch(
    "https://privbackend-255.onrender.com/api/user/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userBody),
    },
  );

  if (response.ok) {
    alert("Added user successfully.");

    document.querySelector("form").reset();
  } else {
    const result = await response.json();
    document.querySelector("#errorMsg").innerHTML =
      result.error || "Cannot add user due to error.";
  }
}
