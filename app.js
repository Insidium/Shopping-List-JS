//Selectors
const shopInput = document.querySelector(".shop-input");
const shopButton = document.querySelector(".shop-button");
const shopList = document.querySelector(".shop-list");

//Event Listeners
shopButton.addEventListener("click", addItem);

//Functions
function addItem(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Shopping div
  const shopDiv = document.createElement("div");
  shopDiv.classList.add("shopping");
  //Create list item
  const newItem = document.createElement("li");
  newItem.innerText = "Pow!";
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
}
