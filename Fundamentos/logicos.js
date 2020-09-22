function compras(trab1, trab2){
  const comprarSorv = trab1 || trab2;
  const comprarTv50 = trab1 && trab2;
  const comprarTV32 = trab1 != trab2;
  const manterSaudavel = !comprarSorv;

  return {comprarSorv, comprarTv50, comprarTV32, manterSaudavel}
}


console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));