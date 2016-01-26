

function addSidebarToggle() {
  // var $sidebar = document.querySelector(".site__right-sidebar");
  var $toggle = document.querySelector(".site__right-sidebar-toggle");
  $toggle.addEventListener("click",function() {
    document.body.classList.toggle("js-show-right-sidebar");
  });
}


function makeCartScrollNicely() {
  var cart = document.querySelector(".cart__content");
  Ps.initialize(cart);
}

window.onload = function() {
  console.log("page loaded");
  makeCartScrollNicely();
  var $toggle = document.querySelector(".site__right-sidebar-toggle");
  $toggle.addEventListener("click",function() {
    document.body.classList.toggle("js-show-right-sidebar");
  });
}
