// import todos os metodos do modulo ramda as R
// import * as R from 'ramda'
// outra forma de importar
import { union as juntaTudo, uniq} from 'ramda'

const arr1 = [1,1,1,1,2,2,3,4,5,6,6];
const arr2 = [5,6,6,6,7,7,8,9,10,1];

const arr3 = juntaTudo(arr1, arr2);

console.log(arr3);

const arr4 = uniq(arr1);

console.log(arr4);


// modulo utils.js
import sum, {sub, mult, div} from './utils';

console.log(sum(2,3)); // 5

console.log(sub(4,1)); // 3

console.log(mult(2, 10)); // 20

console.log(div(5, 2)); // 2.5
