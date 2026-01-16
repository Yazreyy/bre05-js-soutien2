let zone = document.querySelector("#zone-interactive");
let position = 0;
zone.addEventListener("mousedown" , (event) =>{
    zone.style.backgroundColor = "orange";
})
zone.addEventListener("mouseup" , (event) =>{
    zone.style.backgroundColor = "lightgrey";
})