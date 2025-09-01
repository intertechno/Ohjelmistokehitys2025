console.log("Aloitetaan DOM-muutokset.");

const nappi = document.createElement("button");
nappi.textContent = "Klikkaa tästä!";
nappi.style.backgroundColor = "lightblue";
nappi.style.fontSize = "22px";
document.body.appendChild(nappi);

nappi.addEventListener("click", function() {
    alert("Moi JavaScript!");
});

console.log("DOM-muutokset valmiit.");
