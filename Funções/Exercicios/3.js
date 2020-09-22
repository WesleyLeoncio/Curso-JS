function calcExp1(base, exp) {
    return base + "^" + exp + " = " + Math.pow(base, exp);
}

const calcExp2 = (base, exp) => base + "^" + exp + " = " + Math.pow(base, exp);

console.log(calcExp1(2, 3));
console.log(calcExp2(2, 3));