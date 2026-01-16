let fruits = [[ "pomme" , "poire"] ,
              ["bananas" , "kiwi" , "pineapple"] ,
              ["fraise" , "framboise"]];

for(let i = 0 ; i < fruits.length ; i++){
    for( let j = 0 ; j < fruits[i].length ; j++){
        console.log("Fruits trouvés :" + fruits[i][j])
    }
}