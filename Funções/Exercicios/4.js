function restoDiv1(v1, v2) {
    console.log("Resto da divisão" + v1 + " / " + v2 + " = " + (v1 % v2));
    console.log("Resultado da divisão: " + Math.floor(v1 / v2));
}

const restoDiv2 = (v1, v2) => console.log("Resto da divisão" + v1 + " / " + v2 + " = " + (v1 % v2));

restoDiv1(30, 4);
restoDiv2(30, 4);