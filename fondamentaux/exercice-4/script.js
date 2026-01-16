let numbers = [10,25,5,40,18,3];

function afficherGrandNombres(numbers){
    for(let i = 0 ; i < numbers.length ; i++){
        if( numbers[i] > 15){
            console.log(numbers[i]);
        }
    }
}

afficherGrandNombres(numbers);