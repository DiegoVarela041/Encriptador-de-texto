const textArea = document.querySelector("#texto");
const mensaje = document.querySelector("#resultado");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    //mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    //mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    const matrizCodigo = [
        ["a", "1h4"], ["b", "2k9"], ["c", "3m8"], ["d", "4p2"], ["e", "5r7"], 
        ["f", "6t3"], ["g", "7v6"], ["h", "8w5"], ["i", "9x1"], ["j", "0y4"], 
        ["k", "a3z"], ["l", "b8n"], ["m", "c1m"], ["n", "d7p"], ["o", "e2q"], 
        ["p", "f9s"], ["q", "g5t"], ["r", "h4u"], ["s", "i3v"], ["t", "j8w"], 
        ["u", "k6x"], ["v", "l2y"], ["w", "m7z"], ["x", "n1a"], ["y", "o9b"], 
        ["z", "p4c"],
        ["0", "q8d"], ["1", "r2e"], ["2", "s7f"], ["3", "t3g"], ["4", "u9h"], 
        ["5", "v1i"], ["6", "w4j"], ["7", "x8k"], ["8", "y6l"], ["9", "z5m"],
        [" ", " "]
    ];
    
    let resultado = "";

    for (let i = 0; i < stringEncriptado.length; i++) {
        let caracter = stringEncriptado[i];
        let encontrado = false;

        for (let j = 0; j < matrizCodigo.length; j++) {
            if (caracter === matrizCodigo[j][0]) {
                resultado += matrizCodigo[j][1];
                encontrado = true;
                break;
            }
        }

        
        if (!encontrado) {
            resultado += caracter;
        }
    }

    return resultado;
}

function desencriptar(stringDesencriptado) {
    const matrizCodigo = [
        ["a", "1h4"], ["b", "2k9"], ["c", "3m8"], ["d", "4p2"], ["e", "5r7"], 
        ["f", "6t3"], ["g", "7v6"], ["h", "8w5"], ["i", "9x1"], ["j", "0y4"], 
        ["k", "a3z"], ["l", "b8n"], ["m", "c1m"], ["n", "d7p"], ["o", "e2q"], 
        ["p", "f9s"], ["q", "g5t"], ["r", "h4u"], ["s", "i3v"], ["t", "j8w"], 
        ["u", "k6x"], ["v", "l2y"], ["w", "m7z"], ["x", "n1a"], ["y", "o9b"], 
        ["z", "p4c"],
        ["0", "q8d"], ["1", "r2e"], ["2", "s7f"], ["3", "t3g"], ["4", "u9h"], 
        ["5", "v1i"], ["6", "w4j"], ["7", "x8k"], ["8", "y6l"], ["9", "z5m"], 
        [" ", " "]
    ];
    
    let resultado = "";
    let i = 0;

    while (i < stringDesencriptado.length) {
        let subStr;
        
      
        if (stringDesencriptado[i] === " ") {
            subStr = " ";
            i++;
        } else {
            subStr = stringDesencriptado.substr(i, 3);
            i += 3;
        }

        let encontrado = false;

        for (let j = 0; j < matrizCodigo.length; j++) {
            if (subStr === matrizCodigo[j][1]) {
                resultado += matrizCodigo[j][0];
                encontrado = true;
                break;
            }
        }

     
        if (!encontrado) {
            resultado += subStr;
        }
    }

    return resultado;
}
/*
function copiarTexto() {
    const resultado = document.querySelector("#resultado");
    resultado.select();
    document.execCommand("copy");

    // Opcional: Alerta o feedback visual para indicar que se ha copiado
    //alert("Texto copiado: " + resultado.value);
}
*/
function copiarTexto() {
    const resultado = document.querySelector("#resultado");
    const boton = document.querySelector("#nuevo-boton");

 
    resultado.select();
    document.execCommand("copy");

    
    boton.textContent = "Copiado";

    setTimeout(() => {
        boton.textContent = "Copiar";
    }, 3000);
}
