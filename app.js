//Selectors
const shopInput = document.querySelector(".shop-input");
const shopButton = document.querySelector(".shop-button");
const shopList = document.querySelector(".shop-list");
const filterOption = document.querySelector(".filter-item");
//Event Listeners
shopButton.addEventListener("click", addItem);
shopList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterShopItem);
//Functions
function addItem(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Shopping div
  const shopDiv = document.createElement("div");
  shopDiv.classList.add("shopping");
  //Create list item
  const newItem = document.createElement("li");
  newItem.innerText = shopInput.value;
  newItem.classList.add("shop-item");
  shopDiv.appendChild(newItem);
  //Check item button
  const doneButton = document.createElement("button");
  doneButton.innerHTML = "<i class='fas fa-check-circle'></i>";
  doneButton.classList.add("done-btn");
  shopDiv.appendChild(doneButton);
  //Delete item button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
  deleteButton.classList.add("delete-btn");
  shopDiv.appendChild(deleteButton);
  //Append to list
  shopList.appendChild(shopDiv);
  //Clear input value
  shopInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //Delete list item
  if (item.classList[0] === "delete-btn") {
    const shopItem = item.parentElement;
    //Animation
    shopItem.classList.add("drop");
    shopItem.addEventListener("transitionend", function () {
      shopItem.remove();
    });
  }

  if (item.classList[0] === "done-btn") {
    const shopItem = item.parentElement;
    shopItem.classList.toggle("done");
  }
}

function filterShopItem(event) {
  const shopItems = shopList.childNodes;
  shopItems.forEach(function (item) {
    switch (event.target.value) {
      case "all":
        item.style.display = "flex";
        break;
      case "gotit":
        if (item.classList.contains("done")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
      case "needit":
        if (!item.classList.contains("done")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
    }
  });
}
