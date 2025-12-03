function obtenerElementoRandom(elementos) {
    if(elementos.length === 0){
        return undefined;
    }

    const indiceRandom = Math.floor(Math.random() * elementos.length);

    return elementos[indiceRandom];
}

function getLetrasRestantes(letras, letrasUsadas){
    const letrasUsadasAux = new Set(letrasUsadas);
    const letrasAux = new Set(letras);

    let letrasRestantes = [];

    letrasAux.forEach((letra) => {
        if(!letrasUsadasAux.has(letra)){
            letrasRestantes.push(letra);
        }
    });

    return letrasRestantes;
}

function getLetra(){
    //const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','z'];
    
    const letrasUsadas = document.getElementById("inputPalabra").value.split("");
    console.log(letrasUsadas);

    const letrasRestantes = getLetrasRestantes(letras, letrasUsadas);
    let letraElegida = obtenerElementoRandom(letrasRestantes);
    console.log(letraElegida);
    console.log(letrasRestantes);

    document.getElementById("letra").src = `./img/${letraElegida}.svg`;

    document.getElementById("inputPalabra").value = document.getElementById("inputPalabra").value + letraElegida;

}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("inputPalabra").value = "";
});