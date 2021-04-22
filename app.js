// DOM selectors
const productHeader = document.querySelector(".product-header");
const companyHeader = document.querySelector(".company-header");
const connectHeader = document.querySelector(".connect-header");
const productsMenu = document.querySelector(".products");
const companyMenu = document.querySelector(".companies");
const connectMenu = document.querySelector(".connects");

//tests
// console.log(companyMenu);
// console.log(connectMenu);
// console.log(productsMenu);

//event listeners
productHeader.addEventListener("click", function () {
 //  console.log("hi1");
 showMenu(productsMenu);
});
companyHeader.addEventListener("click", function () {
 //  console.log("hi");
 showMenu(companyMenu);
});
connectHeader.addEventListener("click", function () {
 //  console.log("hey");
 showMenu(connectMenu);
});

function showMenu(item) {
 if (!item.classList.contains("container")) {
  item.classList.toggle("container");
 } else {
  item.classList.remove("container");
 }
}
