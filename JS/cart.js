let localcartPull = JSON.parse(localStorage.getItem("localpush"));
// console.log("localpull", localcartPull);

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
// console.log("new cart", newCartData);

// newCartData map function starts here
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
  totalAmount()
});

// Set the innerHTML of the container with the dynamically generated content
document.getElementById("cartitemnew").innerHTML = innerHTML;

//rendered items
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
}

// Increment program
document.querySelectorAll(".Increment").forEach((item) => {
  item.addEventListener("click", IncrementItem);
});

function IncrementItem() {
  let add = this.id;
  let quantityElement = this.parentElement.querySelector("#quantity");
  let quantity = parseInt(quantityElement.innerHTML);
  let priceElement = this.parentElement.parentElement.querySelector(".price");
  let originalPriceValue = priceElement.getAttribute("data-original-price");

  let originalPrice = parseFloat(originalPriceValue);

  // Increase quantity
  quantity++;
  quantityElement.innerHTML = quantity;

  // Calculate new total price
  let totalPrice = originalPrice * quantity;
  priceElement.innerHTML = "₹ " + totalPrice.toFixed(2); // Update the displayed price
  totalAmount();
  RenderedItems()
}

//decrement function
document.querySelectorAll(".Decrement").forEach((item) => {
  item.addEventListener("click", DecrementItem);
});

function DecrementItem() {
  let itemId = this.id;
  let quantityElement = this.parentElement.querySelector("#quantity");
  let quantity = parseInt(quantityElement.innerHTML);
  let priceElement = this.parentElement.parentElement.querySelector(".price");
  let originalPrice = parseFloat(
    priceElement.getAttribute("data-original-price")
  );
  if (quantity > 0) {
    quantity--;
    quantityElement.innerHTML = quantity;
    let totalPrice = originalPrice * quantity;
    priceElement.innerHTML = "₹ " + totalPrice.toFixed(2); // Update the displayed price
    if (quantity === 0) {
      const index = newCartData.findIndex((item) => item.id === itemId);
      // console.log(index);
      if (index === -1) {
        newCartData.splice(index, 1);
        RenderedItems();
        totalAmount();
      }
    }
    totalAmount();
  }
}

let totalamount = "";

function totalAmount() {
  var sum = 0,quantity = 0;
  newCartData.map((item) => {
    quantity += item.quantity;
    sum += item.price;
  });
  document.getElementById("total-item").innerText = quantity;
  document.getElementById("total-price").innerText = "₹"+sum;
}
