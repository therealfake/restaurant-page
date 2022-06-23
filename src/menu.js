export {renderMenu as default};

function renderMenu() {
    let content = document.getElementById("content");

    let menu = document.createElement("div");
    menu.id = "menu";
    content.appendChild(menu);

    let subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Menu";
    menu.appendChild(subTitle);

    let dishes = document.createElement("div");
    dishes.id = "dishes";
    menu.appendChild(dishes);

    let dish = document.createElement("div");
    dish.classList.add("dish");
    let subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee Fried Rice";
    let description = document.createElement("div");
    description.innerHTML = "Stir fry with eggs, vegetables, seatfood, and your choice of meat.\
    Most importantly the rice is washed, boiled, and seasoned with Columbian Coffee<br>";
    description.innerHTML += "Small: 10.95 Large: 15.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Aged Coffee Nuggets";
    description = document.createElement("div");
    description.innerHTML = "While our nuggets were the cheapest frozen nuggets we could find from Walmart.\
    These nuggets marinate for 3 days in Starbuck's finest Nitro Cold Brew<br>";
    description.innerHTML += "10-piece: 6.95 20-piece: 12.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffger, The Coffee Burger";
    description = document.createElement("div");
    description.innerHTML = "What makes this burger different from your typical burger comes down\
    to the patty. Our Tanzania Peaberry coffee beans get grinded to a fine texture and with the help\
    of some local honey, forms the succulent, mouthwateringly delicious star of this dish <br>";
    description.innerHTML += "Price-per-burger: 20";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee Soup";
    description = document.createElement("div");
    description.innerHTML = "Isn't this just coffee? Wrong. Coffee soup is the result of a harmonious \
    fusion of 30 different types of coffee beans, and seasoned with our secret in house seasoning<br>";
    description.innerHTML += "small: 5.95 large (serves one univesity student): 20.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee";
    description = document.createElement("div");
    description.innerHTML = "The start to a productive day. Our classic coffee is not made\
    with an espresso machine, French Press, or Drip Over. We make our in house coffee with a handful of love, an old bowl,\
    and Nescafe Instant Coffee. To help you appreciate the simplicity of coffee.<br>";
    description.innerHTML += "small: 0.95 medium: 1.95 large: 2.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);
}