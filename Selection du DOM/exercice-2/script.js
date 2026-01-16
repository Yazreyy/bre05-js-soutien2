let element = document.querySelectorAll("li");
for(let i = 0 ; i < element.length ; i++){
    if(i % 2  === 0 ){
        element[i].style.color = "blue"
    }
}