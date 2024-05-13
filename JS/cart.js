
//localcart pull function
let localcartPull = JSON.parse(localStorage.getItem("localpush"));

//changing to a new array of function
let newCartData = [];
localcartPull.forEach((items) => {
  newCartData.push({
    id: items.id,
    img: items.img,
    foodName: items.foodName,
    quantity: items.quantity,
    type: items.type,
    cuisine: items.cuisine,
    brand: items.brand,
    rating: items.rating,
    price: items.price,
  });
});

//rendered items cart items iteration
function RenderedItems() {
  let innerHTML = "";

  newCartData.forEach((item) => {
    innerHTML += `
    <div class="card mx-lg-5 m-3" style="width: 15rem;">
      <img src="${item.img}" alt="${item.foodName}" class="card-img-top img-fluid rounded-3" style="background-color: gray;">
      <div class="card-body text-center">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="card-title text-black text-capitalize"><span class="fname">${item.foodName}</span></h6>
          <div class="d-flex">
            <h6 class="badge bg-black">${item.rating}<span class="fa fa-star" style="font-size:0.6rem;"></span></h6>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <p>Type <br><span class="mb-0">${item.type}</span></p>
          <p>Cuisines <br><span class="mb-0">${item.cuisine}</span></p>
          <p>Price <br><span class="mb-0 price" data-original-price="${item.price}">₹ ${item.price}</span></p>
        </div>
        <div class="d-flex justify-content-center">
          <h6>Brand ${item.brand}</h6>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn btn-primary w-50 Decrement" id="${item.id}">Remove</div>
          <div class="px-2 fw-bold" id="quantity">${item.quantity}</div>
          <div class="btn btn-primary w-50 Increment" id="${item.id}">Add</div>
        </div>
      </div>
    </div>
  `;
  });

  document.getElementById("cartitemnew").innerHTML = innerHTML;

  // Increment program
  document.querySelectorAll(".Increment").forEach((item) => {
    item.addEventListener("click", IncrementItem);
  });

  //decrement function
  document.querySelectorAll(".Decrement").forEach((item) => {
    item.addEventListener("click", DecrementItem);
  });

  totalAmount();
}
RenderedItems();

//Increment function
function IncrementItem() {
  let itemId = this.id;
  let addingItem = newCartData.find((item) => item.id == itemId);
  addingItem.quantity++;

  let newPrice =
    (addingItem.price * addingItem.quantity -
      addingItem.price * (addingItem.quantity - 1)) /
    (addingItem.quantity - 1);
  addingItem.price = newPrice * addingItem.quantity;

  let quantityElement = document.querySelector(`#quantity`);
  let priceElement = document.querySelector(`.price`);
  if (quantityElement && priceElement) {
    quantityElement.textContent = addingItem.quantity;
    priceElement.textContent = "₹ " + addingItem.price.toFixed(2);
  }

  // Update the total amount
  totalAmount();
  RenderedItems();
}

//Decrement function
function DecrementItem() {
  let itemToDec =this.id;
  let removingItem = newCartData.find((element) => element.id == itemToDec);

  if (removingItem.quantity > 1) {
    let currPrice =
      (removingItem.price * removingItem.quantity - removingItem.price * (removingItem.quantity - 1)) /
      removingItem.quantity;
    removingItem.quantity -= 1;
    removingItem.price = currPrice * removingItem.quantity;
  } else {
    const index = newCartData.findIndex((item) => item.id === removingItem.id);
    newCartData.splice(index, 1);
  }

  totalAmount();
  RenderedItems();
}

//Total amount display function 
let totalamount = "";
function totalAmount() {
  var sum = 0,
    quantity = 0;
  newCartData.map((item) => {
    quantity += item.quantity;
    sum += item.price;
  });
  document.getElementById("total-item").innerText = quantity;
  document.getElementById("total-price").innerText = "₹" + sum;
}
