export {renderNav as default};

function renderNav() {
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
}
   