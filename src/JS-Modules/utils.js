// exporting methods

function sum(a, b) {
  return a + b;
}

// metodo principal
// so pode haver um default por modulo
// nao precisa utilizar as chaves
export default sum;

// named export
// ter varios exports dentro de um arquivo
// so pode chamar dentro do mesmo nome
// o import precisa das chaves { sub }
export function sub(a,b) {
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}
// também posso fazer o importe dessa maneira
export {mult, div};
