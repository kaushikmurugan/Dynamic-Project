// let foodItem = [
//     { id: 1, foodName: "pongal vadai", category: "breakfast", type: "Veg", rating: 4.7, price: 100, img: "images/pongal.jpg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 2, foodName: "poori (2 pair)", category: "breakfast", type: "Veg", rating: 4.6, price: 60, img: "images/poori.jpg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 3, foodName: "Idly (2 pair)", category: "breakfast", type: "Veg", rating: 4.6, price: 40, img: "images/idly.jpg", brand: "Annapoorna", cuisine: "IC" },
//     { id: 4, foodName: "Dosa (2 pair)", category: "breakfast", type: "Veg", rating: 4.6, price: 80, img: "images/dosa.jpeg", brand: "Annapoorna", cuisine: "IC" },
//     { id: 5, foodName: "paneer tikka", category: "paneer", type: "Veg", rating: 4.8, price: 180, img: "images/paneer tikka.jpeg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 6, foodName: "kadai paneer", category: "paneer", type: "Veg", rating: 4.4, price: 120, img: "images/kadai paneer.jpg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 7, foodName: "palak paneer", category: "paneer", type: "Veg", rating: 4.5, price: 140, img: "images/palak paneer.jpeg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 8, foodName: "chicken tikka masala", category: "chicken", type: "N/Veg", rating: 4.6, price: 130, img: "images/chicken tikka masala.jpg", brand: "Mc Delivery", cuisine: "IC" },
//     { id: 9, foodName: "Butter chicken", category: "chicken", type: "N/Veg", rating: 4.6, price: 150, img: "images/butter chicken.jpg", brand: "Mc Delivery", cuisine: "IC" },
//     { id: 10, foodName: "tandoori", category: "BBQ", type: "N/Veg", rating: 4.8, price: 250, img: "images/tandoori.jpg", brand: "KFC", cuisine: "IC" },
//     { id: 11, foodName: "grill (half)", category: "BBQ", type: "N/Veg", rating: 4.9, price: 290, img: "images/grill half.jpg", brand: "KFC", cuisine: "IC" },
//     { id: 12, foodName: "grill (full)", category: "BBQ", type: "N/Veg", rating: 4.9, price: 550, img: "images/grill full.jpg", brand: "KFC", cuisine: "IC" },
//     { id: 13, foodName: "Non veg meals", category: "meals", type: "N/Veg", rating: 4.9, price: 180, img: "images/nonveg meals.jpg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 14, foodName: "veg meals", category: "meals", type: "Veg", rating: 4.9, price: 160, img: "images/veg meals.jpg", brand: "Annapoorna", cuisine: "IC" },
//     { id: 15, foodName: "bucket biryani (1/2kg)", category: "bucket biryani", type: "N/Veg", rating: 4.5, price: 180, img: "images/bucket briyani dt.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 16, foodName: "bucket biryani (1kg)", category: "bucket biryani", type: "N/Veg", rating: 4.5, price: 280, img: "images/bucket briyani dt.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 17, foodName: "bucket biryani (1/2kg)", category: "bucket biryani", type: "N/Veg", rating: 4.6, price: 200, img: "images/bucket briyani mc.jpeg", brand: "Mc Delivery", cuisine: "IC" },
//     { id: 18, foodName: "bucket biryani (1kg)", category: "bucket biryani", type: "N/Veg", rating: 4.6, price: 300, img: "images/bucket briyani mc.jpeg", brand: "Mc Delivery", cuisine: "IC" },
//     { id: 19, foodName: "Chicken biryani", category: "biryani", type: "N/Veg", rating: 4.4, price: 180, img: "images/chicken briyani.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 20, foodName: "Mutton Biryani", category: "biryani", type: "N/Veg", rating: 4.8, price: 350, img: "images/mutton briyani.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 21, foodName: "Egg Biryani", category: "biryani", type: "N/Veg", rating: 4.3, price: 100, img: "images/egg briyani.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 22, foodName: "Fish Biryani", category: "biryani", type: "N/Veg", rating: 4.5, price: 200, img: "images/fish briyani.jpg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 23, foodName: "Chicken 65 Biryani", category: "biryani", type: "N/Veg", rating: 4.6, price: 220, img: "images/chicken 65 briyani.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 24, foodName: "Hyderabad Biryani", category: "biryani", type: "N/Veg", rating: 4.8, price: 250, img: "images/hyderabad briyani.jpeg", brand: "dindigul thalapakatti", cuisine: "IC" },
//     { id: 25, foodName: "Mushroom Biryani", category: "biryani", type: "Veg", rating: 4.7, price: 160, img: "images/mushroom briyani.jpeg", brand: "Anandhaas", cuisine: "IC" },
//     { id: 26, foodName: "Vegetable Biryani", category: "biryani", type: "Veg", rating: 4.6, price: 140, img: "images/vegetable briyani.jpeg", brand: "Annapoorna", cuisine: "IC" },
//     { id: 27, foodName: "Omelet", category: "cheese", type: "Veg", rating: 4.6, price: 350, img: "images/omelet.jpg", brand: "Annapoorna", cuisine: "FC" },
//     { id: 28, foodName: "Nicoise salad", category: "cheese", type: "Veg", rating: 4.5, price: 250, img: "images/nicoise salad.jpeg", brand: "Anandhaas", cuisine: "FC" },
//     { id: 29, foodName: "Beef bourguignon", category: "fry", type: "N/Veg", rating: 4.3, price: 320, img: "images/beef bourguignon.jpg", brand: "Mc Delivery", cuisine: "FC" },
//     { id: 30, foodName: "Cassoulet", category: "cheese", type: "Veg", rating: 4.8, price: 200, img: "images/cassoulet.jpg", brand: "Anandhaas", cuisine: "FC" },
//     { id: 31, foodName: "Veal stew", category: "chicken", type: "N/Veg", rating: 4.5, price: 180, img: "images/veal stew.jpeg", brand: "Mc Delivery", cuisine: "FC" },
//     { id: 32, foodName: "Raclette", category: "cheese", type: "Veg", rating: 4.4, price: 280, img: "images/raclette.jpeg", brand: "Annapoorna", cuisine: "FC" },
//     { id: 33, foodName: "Tartiflette", category: "chicken", type: "N/Veg", rating: 4.1, price: 190, img: "images/tartiflette.jpeg", brand: "Mc Delivery", cuisine: "FC" },
//     { id: 34, foodName: "Croque monsieur", category: "fry", type: "N/Veg", rating: 4.2, price: 270, img: "images/croque monsieur.jpg", brand: "KFC", cuisine: "FC" },
//     { id: 35, foodName: "Thai stir fry", category: "fry", type: "N/Veg", rating: 4.1, price: 290, img: "images/thai stir fry.jpeg", brand: "Mc Delivery", cuisine: "TC" },
//     { id: 36, foodName: "Green chilli panner", category: "paneer", type: "Veg", rating: 4.8, price: 250, img: "images/green chilli paneer.jpeg", brand: "Annapoorna", cuisine: "TC" },
//     { id: 37, foodName: "Thai green curry", category: "paneer", type: "Veg", rating: 4.6, price: 240, img: "images/thai green curry.jpeg", brand: "Annapoorna", cuisine: "TC" },
//     { id: 38, foodName: "Coconut noodel", category: "fry", type: "Veg", rating: 4.8, price: 220, img: "images/coconut noodel.jpeg", brand: "Pizza Hut", cuisine: "TC" },
//     { id: 39, foodName: "Thai fried rice", category: "fry", type: "Veg", rating: 3.9, price: 180, img: "images/thai fried rice.jpeg", brand: "Mc Delivery", cuisine: "TC" },
//     { id: 40, foodName: "Thai meals", category: "meals", type: "Veg", rating: 4.2, price: 160, img: "images/thai meals.jpeg", brand: "Annapoorna", cuisine: "TC" },
//     { id: 41, foodName: "Thai's laab", category: "fry", type: "N/Veg", rating: 4.5, price: 290, img: "images/thai laab.jpeg", brand: "KFC", cuisine: "TC" },
//     { id: 42, foodName: "Fried corn", category: "fry", type: "Veg", rating: 4.4, price: 200, img: "images/fried corn.jpeg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 43, foodName: "Ranch eggs", category: "fry", type: "Veg", rating: 4.6, price: 250, img: "images/ranch eggs.jpeg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 44, foodName: "Plow disc (BBQ)", category: "BBQ", type: "Veg", rating: 4.3, price: 300, img: "images/plow disc.jpg", brand: "Anandhaas", cuisine: "MC" },
//     { id: 45, foodName: "Tacos", category: "chicken", type: "N/Veg", rating: 4.4, price: 220, img: "images/tacos.jpg", brand: "KFC", cuisine: "MC" },
//     { id: 46, foodName: "Burritos", category: "BBQ", type: "N/Veg", rating: 4.2, price: 250, img: "images/burrito.jpeg", brand: "KFC", cuisine: "MC" },
//     { id: 47, foodName: "Pibil pork stew", category: "fry", type: "N/Veg", rating: 4.5, price: 290, img: "images/pibil pork stew.jpg", brand: "KFC", cuisine: "MC" },
//     { id: 48, foodName: "Nogada pepper", category: "cheese", type: "Veg", rating: 4.1, price: 210, img: "images/nogada pepper.jpeg", brand: "KFC", cuisine: "MC" },
//     { id: 49, foodName: "Quesadilla", category: "pizza", type: "Veg", rating: 4.7, price: 240, img: "images/quesadilla.jpg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 50, foodName: "Tortilla pizza", category: "pizza", type: "N/Veg", rating: 4.5, price: 250, img: "images/tortilla pizza.jpg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 51, foodName: "Caprese pizza", category: "pizza", type: "N/Veg", rating: 4.7, price: 280, img: "images/caprese pizza.jpeg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 52, foodName: "Margherita pizza", category: "pizza", type: "N/Veg", rating: 4.8, price: 300, img: "images/margherita pizza.jpeg", brand: "Pizza Hut", cuisine: "MC" },
//     { id: 53, foodName: "Sicilian pizza", category: "pizza", type: "Veg", rating: 4.4, price: 250, img: "images/sicilian pizza.jpg", brand: "Pizza Hut", cuisine: "MC" },
// ]
 import { foodItem } from "./fooditem.js";

 document.getElementById("biryanibtn").addEventListener("click", () => {
    let biryani = document.getElementById("biryani");
    let displaySetting = biryani.style.display;
    if (displaySetting == 'block') {
        biryani.style.display = 'none';
    }
    else {
        biryani.style.display = 'block';
    }
});

const BiryaniData = foodItem.filter(items => items.category == "biryani");
console.log(BiryaniData);

BiryaniData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("biryanidisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("breakfastbtn").addEventListener("click", () => {
    let breakfast = document.getElementById("breakfast");
    let displaySetting = breakfast.style.display;
    if (displaySetting == 'block') {
        breakfast.style.display = 'none';
    }
    else {
        breakfast.style.display = 'block';
    }
});

const BreakFastData = foodItem.filter(items => items.category == "breakfast");
console.log(BreakFastData);

BreakFastData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("breakfastdisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("cheesebtn").addEventListener("click", () => {
    let cheese = document.getElementById("cheese");
    let displaySetting = cheese.style.display;
    if (displaySetting == 'block') {
        cheese.style.display = 'none';
    }
    else {
        cheese.style.display = 'block';
    }
});

const CheeseData = foodItem.filter(items => items.category == "cheese");
console.log(CheeseData);

CheeseData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("cheesedisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("mealsbtn").addEventListener("click", () => {
    let meals = document.getElementById("meals");
    let displaySetting = meals.style.display;
    if (displaySetting == 'block') {
        meals.style.display = 'none';
    }
    else {
        meals.style.display = 'block';
    }
});

const MealsData = foodItem.filter(items => items.category == "meals");
console.log(MealsData);

MealsData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("mealsdisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("BBQbtn").addEventListener("click", () => {
    let BBQ = document.getElementById("BBQ");
    let displaySetting = BBQ.style.display;
    if (displaySetting == 'block') {
        BBQ.style.display = 'none';
    }
    else {
        BBQ.style.display = 'block';
    }
});

const BBQData = foodItem.filter(items => items.category == "BBQ");
console.log(BBQData);

BBQData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("BBQdisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("bucketbiryanibtn").addEventListener("click", () => {
    let bucketbiryani = document.getElementById("bucketbiryani");
    let displaySetting = bucketbiryani.style.display;
    if (displaySetting == 'block') {
        bucketbiryani.style.display = 'none';
    }
    else {
        bucketbiryani.style.display = 'block';
    }
});

const BucketBiryaniData = foodItem.filter(items => items.category == "bucket biryani");
console.log(BucketBiryaniData);

BucketBiryaniData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("bucketbiryanidisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("frybtn").addEventListener("click", () => {
    let fry = document.getElementById("fry");
    let displaySetting = fry.style.display;
    if (displaySetting == 'block') {
        fry.style.display = 'none';
    }
    else {
        fry.style.display = 'block';
    }
});

const FryData = foodItem.filter(items => items.category == "fry");
console.log(FryData);

FryData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("frydisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("paneerbtn").addEventListener("click", () => {
    let paneer = document.getElementById("paneer");
    let displaySetting = paneer.style.display;
    if (displaySetting == 'block') {
        paneer.style.display = 'none';
    }
    else {
        paneer.style.display = 'block';
    }
});

const PaneerData = foodItem.filter(items => items.category == "paneer");
console.log(PaneerData);

PaneerData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("paneerdisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("chickenbtn").addEventListener("click", () => {
    let chicken = document.getElementById("chicken");
    let displaySetting = chicken.style.display;
    if (displaySetting == 'block') {
        chicken.style.display = 'none';
    }
    else {
        chicken.style.display = 'block';
    }
});

const ChickenData = foodItem.filter(items => items.category == "chicken");
console.log(ChickenData);

ChickenData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("chickendisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});

document.getElementById("pizzabtn").addEventListener("click", () => {
    let pizza = document.getElementById("pizza");
    let displaySetting = pizza.style.display;
    if (displaySetting == 'block') {
        pizza.style.display = 'none';
    }
    else {
        pizza.style.display = 'block';
    }
});

const PizzaData = foodItem.filter(items => items.category == "pizza");
console.log(PizzaData);

PizzaData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    document.getElementById("pizzadisp").appendChild(div);


    let img = document.createElement("img")
    img.setAttribute("src", item.img);
    img.setAttribute("alt", item.foodName);
    img.classList.add("card-img-top", "img-fluid", "rounded-3");
    img.setAttribute("style", "background-color: gray")
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("card-body", "text-center");
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("d-flex", "justify-content-between", "align-items-center");
    div2.appendChild(div3);

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-black", "text-capitalize");
    let span1 = document.createElement("span");
    span1.innerHTML = item.foodName;
    h6.appendChild(span1);
    div3.appendChild(h6);

    let div4 = document.createElement("div");
    div4.classList.add("d-flex");
    div3.appendChild(div4);

    let h62 = document.createElement("h6");
    h62.classList.add("badge", "bg-black");
    let span2 = document.createElement("span");
    span2.innerText = item.rating;
    h62.appendChild(span2);
    let span3 = document.createElement("span");
    span3.classList.add("fa", "fa-star");
    span3.setAttribute("style", "font-size:0.6rem;")
    h62.appendChild(span3);
    div4.appendChild(h62);

    let div5 = document.createElement("div");
    div5.classList.add("d-flex", "justify-content-between");
    div2.appendChild(div5);

    let p1 = document.createElement("p");
    let ptype = document.createTextNode("Type ");
    p1.appendChild(ptype);
    div5.appendChild(p1);

    let br = document.createElement("br");
    p1.appendChild(br)

    let span4 = document.createElement("span");
    span4.classList.add("mb-0");
    span4.innerText = item.type;
    p1.appendChild(span4);

    let p2 = document.createElement("p");
    let pcuisine = document.createTextNode("Cuisines ");
    p2.appendChild(pcuisine);
    div5.appendChild(p2);

    let span5 = document.createElement("p");
    span5.classList.add("mb-0");
    span5.innerText = item.cuisine;
    p2.appendChild(span5);

    let p3 = document.createElement("p");
    let pprice = document.createTextNode("price ");
    p3.appendChild(pprice);
    div5.appendChild(p3);

    let span6 = document.createElement("p");
    span6.classList.add("mb-0");
    span6.innerText = "₹ " + item.price;
    p3.appendChild(span6);

    let div6 = document.createElement("div");
    div6.classList.add("d-flex", "justify-content-center");
    div2.appendChild(div6);

    let h63 = document.createElement("h6");
    let pbrand = document.createTextNode("Brand ");
    h63.appendChild(pbrand);
    div6.appendChild(h63);

    let span7 = document.createElement("span");
    span7.classList.add("text-muted", "text-capitalize");
    span7.innerText = item.brand;
    h63.appendChild(span7);

    let div7 = document.createElement("div");
    div2.appendChild(div7);

    let add = document.createElement("a");
    add.setAttribute("href", "#");
    add.classList.add("btn", "btn-primary");
    let addtext = document.createTextNode("Add");
    add.appendChild(addtext);
    div7.appendChild(add);

});
