function estAdulte(age){
    if(age >= 18){
        return true;
    	} else {
        return false;
    }
}

function formaterMessage(age){
    if(estAdulte(age) === true){
        console.log("Accès autorisé !")
    	} else {
        console.log("Accès refusé !")
    }
}
formaterMessage(20);
formaterMessage(15);
formaterMessage(18);