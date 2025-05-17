const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("show");
  overlay.classList.remove("show");
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", closeMenu);


let scrollTop = document.getElementById("logo");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTop.style.display = "block";
  } else {
      scrollTop.style.display = "none";
  }
};
scrollTop.addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
})

document.getElementById('signup').addEventListener('click', function () {
  // Redirect after 300ms (matches CSS transition)
  setTimeout(() => {
      window.location.href = 'other/signup.html';
  }, 300);
});
document.getElementById('login').addEventListener('click', function () {
  // Redirect after 300ms (matches CSS transition)
  setTimeout(() => {
      window.location.href = 'other/login.html';
  }, 300);
});


document.getElementById('signupPhone').addEventListener('click', function () {
  // Redirect after 300ms (matches CSS transition)
  setTimeout(() => {
      window.location.href = 'other/signup.html';
  }, 300);
});
document.getElementById('loginPhone').addEventListener('click', function () {
  // Redirect after 300ms (matches CSS transition)
  setTimeout(() => {
      window.location.href = 'other/login.html';
  }, 300);
});