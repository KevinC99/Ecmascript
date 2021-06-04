let name='oscar'
let age = 32

obj ={ name:name, age:age};

obj2= {name, age};
console.log (obj2);

//ArrowFunctions//

const names = [
    {name: 'Tamara', age: 40}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item=> console.log(item.name));

const listOfNames3 =(names, age, country) =>{

}

const listOfNames4 =name=> {

}

const square =Num => num*num;

const helloPromise =() => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('hey!');
        }else{
            reject('upss');
        }
    });
}

helloPromise()
.then(response =>console.log(response))
.then(()=>console.log('hola'))
.catch(error => console.log(error))

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB
        return this.valueA + this.valueB;
    }
}
const calc= new calculator();
console.log(calc.sum(2,2));

import{hello}from './module'

hello();

function* helloworld(){
    if (true) {
        yield'hello'
    }
    if(true){
        yield 'world'
    }
};
const generatorhello= helloworld();
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
