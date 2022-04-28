
function arregloDeObjetos(numeroP,palabraP) {
    
    var arregloPalNum = [];

    var key = palabraP;

    for (let i = 1; i <= numeroP; i ++) {
        
        arregloPalNum[i-1] = {[key]: i};
       
    }
    console.log(arregloPalNum);
}

arregloDeObjetos(10,"Hello")

