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

    document.getElementById("inputPalabra").value = document.getElementById("inputPalabra").value + letraElegida;

    let restantesActual = parseInt(document.getElementById("vueltasRestantes").innerText);
    restantesActual = restantesActual - 1;
    document.getElementById("vueltasRestantes").innerText = restantesActual;
    
    if(restantesActual === 0){
        document.getElementById("btnSacar").disabled = true;
        document.getElementById("btnReiniciar").disabled = false;
    }

    document.getElementById("letra").classList.remove('opacity-100', 'scale-100');
    document.getElementById("letra").classList.add('opacity-0', 'scale-75');
    
    setTimeout(() => {
        document.getElementById("letra").src = `./img/${letraElegida}.svg`;
        document.getElementById("letra").onload = () => {
            document.getElementById("letra").classList.remove('opacity-0', 'scale-75');
            document.getElementById("letra").classList.add('opacity-100', 'scale-100');
        };
    }, 300); // Duración 300ms
    
}

function reiniciar() {
    document.getElementById("vueltasRestantes").innerText = document.getElementById("vueltasTotal").value;
    document.getElementById("btnSacar").disabled = false;
    document.getElementById("btnReiniciar").disabled = true;
    document.getElementById("letra").src = `./img/signo.svg`;
    document.getElementById("inputPalabra").value = "";
}

function iniciar() {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("principal").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("inputPalabra").value = "";
    document.getElementById("vueltasRestantes").innerText = document.getElementById("vueltasTotal").value;
    document.getElementById("btnReiniciar").disabled = true;
});