let button = document.querySelector("#check");

let leftPrice = document.querySelector(".price-one");
let middlePrice = document.querySelector(".price-two");
let rightPrice = document.querySelector(".price-three");

const checkDuration = () => {
  if (button.checked) {
    leftPrice.textContent = "$199.99";
    middlePrice.textContent = "$299.99";
    rightPrice.textContent = "$399.99";
  } else {
    leftPrice.textContent = "$19.99";
    middlePrice.textContent = "$29.99";
    rightPrice.textContent = "$39.99";
  }
};
