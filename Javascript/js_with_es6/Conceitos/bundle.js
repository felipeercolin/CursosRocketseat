"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var a = 1;
var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  // true para deixar item na lista
  // false para remover o item da lista.
  return item % 2 === 0; //% obtem o resto da visiao por 2 e compara com 0.
});
console.log(filter);
var find = arr.find(function (item) {
  //ira retorna "undefined" se nao encontrar
  return item === 4;
});
console.log(find);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); // chama construtor da classe herdada

    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add("novo todo");
};

MinhaLista.mostraUsuario();
console.log(Matematica.soma(1, 2));
teste(10); //Arrow Functions - INICIO

var newArrFunc = arr.map(function (item) {
  return item * 2;
});
console.log(newArrFunc);

var testeArr = function testeArr() {
  return [1, 2, 3];
};

console.log(testeArr()); //funcao nao serve para retornar objetos

var testeObjErro = function testeObjErro() {
  nome: 'Felipe';
};

console.log(testeObjErro());

var testeObjCerto = function testeObjCerto() {
  return {
    nome: 'Felipe'
  };
};

console.log(testeObjCerto()); //valore padrao na funcao

var somaArrowFunc = function somaArrowFunc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaArrowFunc(1));
console.log(somaArrowFunc()); //Arrow Functions - FIM
//desestruturacao - INICIO

var usuario = {
  nome: "Felipe",
  idade: 28,
  endereco: {
    cidade: "PALMAS",
    estado: 'TO'
  },
  empresa: "Ercsystem"
}; // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
//desestruturacao em objetos

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); //desestruturacao em funcoes

function mostraValores(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraValores(usuario); //desestruturacao - FIM
//Operadores REST/SPREAD - INICIO
//rest - INICIO
//rest com desestruturacao em objetos

var nomeUsu = usuario.nomeUsu,
    resto = _objectWithoutProperties(usuario, ["nomeUsu"]);

console.log(nomeUsu);
console.log(resto); //rest com desestruturacao em arrays

var primeiro = arr[0],
    segundo = arr[1],
    numeros_restantes = arr.slice(2);
console.log(primeiro, segundo);
console.log(numeros_restantes); //rest em funcoes

function somaRest(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return a + b + params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 2, 5, 5, 6)); //rest - FIM
//spread - INICIO

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; //spread = junta os arrays em somente 1

var arr3 = [].concat(arr1, arr2);
console.log(arr3); //spread = obtem todos os valores do usuario e só modifica o nome

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Joao'
});

console.log(usuario2); //spread - FIM
//Operadores REST/SPREAD - INICIO
//Template Literals - INICIO

console.log("Meu nome \xE9 ".concat(usuario.nome, " e tenho ").concat(usuario.idade, " anos.")); //Template Literals - FIM
// Object Short Syntax (Sintaxe curta de objetos) - INICIO
//uso normal para passar valores de variaveis para propriedades de objetos

var usuario3 = {
  nome: nome,
  idade: idade,
  empresa: 'Ercsystem'
};
console.log(usuario3); //usando object short syntax

var usuario4 = {
  nome: nome,
  idade: idade,
  empresa: 'Ercsystem'
};
console.log(usuario4); // Object Short Syntax (Sintaxe curta de objetos) - FIM
