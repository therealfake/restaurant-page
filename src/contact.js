export {renderContact as default};

function renderContact(){
    let content = document.getElementById("content");

    let contactContent = document.createElement("div");
    contactContent.id = "contact-content";
    content.appendChild(contactContent);

    let contactInfo = document.createElement("div");
    contactContent.appendChild(contactInfo);

    let subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Contact Us";
    contactInfo.appendChild(subTitle);

    let contactDetail = document.createElement("div");
    contactDetail.classList.add("detail");
    contactDetail.innerHTML = "Phone: 123-COF-FEEE<br><br>";
    contactDetail.innerHTML += "Email: coffeefood@coffeeeverything.com<br><br>";
    contactDetail.innerHTML += "Address: 123 Coffee Paradise Avenue, Coffeeland";
    contactInfo.appendChild(contactDetail);

    let hoursInfo = document.createElement("div");
    contactContent.appendChild(hoursInfo);

    subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Hours of Operation";
    hoursInfo.appendChild(subTitle);

    let hoursDetail = document.createElement("div");
    hoursDetail.classList.add("detail");
    hoursDetail.innerHTML = "Whenever you need your extra kick of caffeine, we got your back. 24/7";
    hoursInfo.appendChild(hoursDetail);
}