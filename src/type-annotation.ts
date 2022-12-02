/*eslint-disable*/
//como typescript é uma linguagem altamente tipada preciso atribuir o tipo da variavel.
// em typescript number é qualquer numero seja tipo inteiro, flutuante ou doble.
let nome : string =  'Adrya';
let idade : number = 30;
let ligado : boolean = true;
let simbolo : symbol = Symbol('qualquer simbolo');

//tipos como array e objetos
let ArrayNumber: Array<number> = [1,2,3]; //dessa forma
let ArrayString : string[]= ['A','@','5']; //ou dessa forma
let ArrayTrueorFalse: Array<boolean> = [true, false];
// objeto
let pessoa: {
    nome:string,
    idade:number,
    adulto:boolean 
} = {
    nome: 'Adrya',
    idade: 21,
    adulto: true
};
console.log(pessoa.nome)

// Funções
function soma(x: number, y: number) :number {
    return x + y;
}
const result = soma(2,2);
// Outra forma
const soma2: (x: number, y: number) => number = (x,y) => x + y; // a arrow function ela vai dizer o tipo de retorno da função e o que ela irá retornar(=>).