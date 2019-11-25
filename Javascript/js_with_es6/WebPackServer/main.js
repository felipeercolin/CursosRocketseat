//usando "export default", pode tbm dar o nome que vc quiser aqui.
//import somaFunction from './soma'
//console.log(somaFunction(1, 2));

//import soma, { sub } from './funcoes'
// console.log(soma(1, 2));
// console.log(sub(4, 2));

//usando "as" vc pode mudar o nome da funcao para ser usar aqui.
//import { soma as somaFunction, sub } from './funcoes'
// console.log(somaFunction(1, 2));
// console.log(sub(4, 2));

//usando "export default" e outras funcoes
//usando importacao de todas os exports de 1 unica vez
import * as funcoes from './funcoes'
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(4, 2));
console.log(funcoes.mult(5, 8));