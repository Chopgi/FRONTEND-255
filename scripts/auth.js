class Auth {
  constructor() {
    document.querySelector("body").style.display = "none";
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }

  validateAuth(auth) {
    if (auth != 1) {
      if (window.location.pathname != "/login.html") {
        window.location.replace("/login.html");
      }
    } else {
      document.querySelector("body").style.display = "block";
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("uname");

    window.location.replace("/login.html");
    //remove all authentication items from session storage and redirect to login
  }
}
