function obtenerElementoRandom(elementos) {
    if(elementos.length === 0){
        return undefined;
    }

    const indiceRandom = Math.floor(Math.random() * elementos.length);

    return elementos[indiceRandom];
}

function prueba(){
    //const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','Z'];

    console.log(obtenerElementoRandom(letras));
}