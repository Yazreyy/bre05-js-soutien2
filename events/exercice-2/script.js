let carre = document.querySelector("#carre");
let left = 0;
carre.addEventListener("click" , (change) =>{
    left += 50
    carre.style.left = left + "px";
})