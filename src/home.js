export {renderHome as default};

function renderHome() {
    let content = document.getElementById("content");
   
   // Top Nav Bar
    let header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);

    let nav = document.createElement("ul");
    nav.id = "links";
    header.appendChild(nav);

    let li = document.createElement("li");
    li.textContent = "Home";
    nav.appendChild(li);

    li = document.createElement("li");
    li.textContent = "Menu";
    nav.appendChild(li);

    li = document.createElement("li");
    li.textContent = "Contact";
    nav.appendChild(li);

    // Main Content
    let main = document.createElement("div");
    main.id = "main";
    content.appendChild(main);

    let name = document.createElement("div");
    name.id = "restaurant-name";
    name.textContent = "Everything Coffee";
    main.appendChild(name);

    let description = document.createElement("div");
    description.id = "description";
    description.textContent = "It all starts with a cup of coffee. But how far can you take it?";
    main.appendChild(description);
}