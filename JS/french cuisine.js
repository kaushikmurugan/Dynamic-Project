import { foodItem } from "./fooditem.js";

const frenchCuisineData = foodItem.filter(items => items.cuisine == "FC");
console.log(frenchCuisineData);

let topic = document.createElement("h1");
topic.classList.add("text-center","text-uppercase");
let tcontent = document.createTextNode("french cuisine");
topic.appendChild(tcontent);
document.getElementById("french").appendChild(topic);

let god = document.createElement("div");
god.classList.add("d-flex", "flex-wrap", "justify-content-center");
document.getElementById("french").appendChild(god);

frenchCuisineData.map((item) => {

    let div = document.createElement("div");
    div.classList.add("card", "mx-lg-5", "m-3");
    div.setAttribute("style", "width: 15rem");
    god.appendChild(div);


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