const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
// document.append(newHeader);

newHeader.setAttribute("id", "victory");
newHeader.textContent = "Emily is the champion";