//import statement is not needed if auth.js is imported before init.js is
const auth = new Auth();

document.querySelector("#logout").addEventListener("click", (e) => {
  auth.logOut();
});
