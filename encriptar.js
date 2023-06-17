var texto="";
var cadena2 ="";
var textoEntrada;
var textoSalida;

function encriptar(){
    textoEntrada=document.getElementById("textoEntrada").value;
    for(i=0; i<textoEntrada.length; i++){
        cadena2 += textoEntrada[i];
        if(textoEntrada[i]=="a"){
            cadena2 += "i"; 
        }  
        if(textoEntrada[i]=="e"){
            cadena2 += "nter";
        } 
        if(textoEntrada[i]=="i"){
            cadena2 += "mes";
        } 
        if(textoEntrada[i]=="o"){
            cadena2 += "ber";
        } 
        if(textoEntrada[i]=="u"){
            cadena2 += "fat";
        } 
        
    }
    textoEntrada= document.getElementById("textoEntrada").value="";
    textoSalida= document.getElementById("textoSalida").value= cadena2;
    cadena2 = "";
    texto = "";
}

function desencriptar(){
    textoSalida= document.getElementById("textoSalida").value.toLowerCase();
    texto= textoSalida.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    textoEntrada= document.getElementById("textoEntrada").value="";
    textoSalida= document.getElementById("textoSalida").value= "";
    textoSalida= document.getElementById("textoSalida").value= texto;
    cadena2 = "";
    texto = "";
}

function copiarPortapapeles() {
    var content = document.getElementById('textoSalida').value;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Texto copiado al portapapeles...")       
    })
        .catch(err => {
        console.log('Algo salió mal', err);
    })
}
