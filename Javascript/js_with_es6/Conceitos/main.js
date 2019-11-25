const a = 1;
const arr = [1, 3, 4, 5, 8, 9];
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(item => {
    // true para deixar item na lista
    // false para remover o item da lista.
    return item % 2 === 0; //% obtem o resto da visiao por 2 e compara com 0.
});

console.log(filter);

const find = arr.find(function(item){
    //ira retorna "undefined" se nao encontrar
    return item === 4;
});

console.log(find);

function teste(x){
    let y = 2;

    if(x > 5)
    {
        let y = 4;
        console.log(x, y);
    }
}

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();// chama construtor da classe herdada
        
        this.usuario = 'Diego'
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add("novo todo");
};

MinhaLista.mostraUsuario();
console.log(Matematica.soma(1, 2));

teste(10);

//Arrow Functions - INICIO
const newArrFunc = arr.map(item => item * 2);
console.log(newArrFunc);

const testeArr = () => [1, 2 , 3]
console.log(testeArr());

//funcao nao serve para retornar objetos
const testeObjErro = () => { nome : 'Felipe'}
console.log(testeObjErro());

const testeObjCerto = () => ({ nome : 'Felipe'})
console.log(testeObjCerto());

//valore padrao na funcao
const somaArrowFunc = (a = 3, b = 6) => a + b;

console.log(somaArrowFunc(1));
console.log(somaArrowFunc());
//Arrow Functions - FIM

//desestruturacao - INICIO

const usuario = {
    nome : "Felipe",
    idade : 28,
    endereco: {
        cidade : "PALMAS",
        estado : 'TO'
    },
    empresa : "Ercsystem"

};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

//desestruturacao em objetos
const {nome, idade, endereco : {cidade} } = usuario;
console.log(nome, idade, cidade);


//desestruturacao em funcoes
function mostraValores({nome, idade, endereco : {cidade} }){
    console.log(nome, idade, cidade);
}

mostraValores(usuario);
//desestruturacao - FIM

//Operadores REST/SPREAD - INICIO
//rest - INICIO
//rest com desestruturacao em objetos
const { nomeUsu, ...resto } = usuario;
console.log(nomeUsu);
console.log(resto);

//rest com desestruturacao em arrays
const [ primeiro, segundo, ...numeros_restantes ] = arr;
console.log(primeiro, segundo);
console.log(numeros_restantes);

//rest em funcoes
function somaRest(a, b, ...params){
    return a + b + params.reduce((total, next) => total + next);
}
console.log(somaRest(1, 2 ,5 ,5, 6));
//rest - FIM

//spread - INICIO
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];

 //spread = junta os arrays em somente 1
 const arr3 = [ ...arr1, ...arr2 ]
 console.log(arr3);

 //spread = obtem todos os valores do usuario e só modifica o nome
 const usuario2 = { ...usuario, nome: 'Joao' };
 console.log(usuario2);
 //spread - FIM

//Operadores REST/SPREAD - INICIO

 //Template Literals - INICIO
console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);
 //Template Literals - FIM

 // Object Short Syntax (Sintaxe curta de objetos) - INICIO

 //uso normal para passar valores de variaveis para propriedades de objetos
const usuario3 = {
    nome: nome,
    idade:idade,
    empresa: 'Ercsystem',
};
console.log(usuario3);

//usando object short syntax
const usuario4 = {
    nome,
    idade,
    empresa: 'Ercsystem',
};
console.log(usuario4);

 // Object Short Syntax (Sintaxe curta de objetos) - FIM