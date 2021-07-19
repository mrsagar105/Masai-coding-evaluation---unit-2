// select products from dom
var products = document.querySelector(".cart_products");

function showProducts(el) {
  //create  product
  var product = document.createElement("div");
  product.setAttribute("class", "product");

  // create img container
  var imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img_container");

  var img1 = document.createElement("img");
  img1.src = el.image1;

  var img2 = document.createElement("img");
  img2.src = el.image2;

  imgContainer.append(img1);

  // create products content
  var productContent = document.createElement("div");
  productContent.setAttribute("class", "product_content");

  var productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.textContent = el.name;

  var productPrice = document.createElement("p");
  productPrice.setAttribute("class", "product_price");
  productPrice.textContent = el.price;

  var productBrand = document.createElement("p");
  productBrand.setAttribute("class", "product_brand");
  productBrand.textContent = "Brand: " + el.brand;

  var productButton = document.createElement("div");
  productButton.setAttribute("class", "product_button button");
  productButton.textContent = "Add to cart";

  productButton.addEventListener("click", function () {
    addToCart(el);
  });

  productContent.append(productName, productPrice, productBrand, productButton);

  product.append(imgContainer, productContent);

  product.addEventListener("mouseover", function () {
    img1.src = el.image2;
  });

  product.addEventListener("mouseout", function () {
    img1.src = el.image1;
  });

  products.append(product);

  // create product content
}

function localData() {
  // make products null
  products.innerHTML = null;

  // get products from local storage
  let data = JSON.parse(localStorage.getItem("cart"));

  // go through all products
  data.forEach(function (product) {
    showProducts(product);
  });
}

localData();

// total price
let cartprod = JSON.parse(localStorage.getItem("cart"));

var sum = 0;
for (var i = 0; i < cartprod.length; i++) {
  sum += cartprod[i].price;
}

let totalprice = document.querySelector(".price");
totalprice.textContent = sum;

// Coupon
function applyCoupon() {
  let coupon = document.querySelector(".coupon").value;
  if (coupon == "masai30") {
    var discount = Math.floor((sum / 100) * 30);

    var finalprice = sum - discount;

    totalprice.textContent = finalprice;
  }
}

function redirect() {
  window.location.href = "checkout.html";
}

let cartItems = document.querySelector(".cart_items");
array = JSON.parse(localStorage.getItem("cart"));
cartItems.textContent = array.length;
