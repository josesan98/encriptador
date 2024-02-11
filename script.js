var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".muneco");
var parrafos = document.querySelector(".parrafos");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonEncriptar.addEventListener("click", mostrarBotonCopiar);
botonDesencriptar.addEventListener("click", mostrarBotonCopiar);

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".caja-texto");
    return cajaTexto.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    parrafos.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for ( var i= 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".copiar-texto"); 

function mostrarBotonCopiar(){
    btnCopiar.style.display = "block";
}


    btnCopiar.addEventListener("click", copiar = () => { var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);    
})