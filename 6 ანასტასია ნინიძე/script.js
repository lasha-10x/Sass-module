function backMainPageByLogo() {
  window.location.href = "/";
}

const loginContainer = document.querySelector(".hidden-login-container");
const userIcon = document.getElementById("user");
function login() {
  loginContainer.classList.toggle("show");
}
userIcon.addEventListener("click", login);

const navItems = document.getElementsByClassName("nav-item");
const dropdowns = document.getElementsByClassName("dropdown");

function dropDownShow() {
  for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];

    navItem.addEventListener("mouseenter", () => {
      dropdowns[i].style.display = "flex";
    });

    navItem.addEventListener("mouseleave", () => {
      dropdowns[i].style.display = "none";
    });
  }
}

dropDownShow();
