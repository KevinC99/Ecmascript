function newFunction(name, age, country){
    var name=name || `oscar`
    var age= age ||32;
    var country=country||`MX`
    console.log(name, age, country);
}

// es6
function newfunction2 (name="Daniel", age=32, country="MX"){
    console.log(name, age, country);
};

newfunction2();
newfunction2("Ricardo","23","co");

//helllo world

let hello ="Hello"
let world ="World"
let epicpfrase= hello+ " "+ world;
console.log(epicpfrase);

let epica2 = `${hello} ${world}`;
console.log(epica2);

//multilineas//

let lorem= "por un ecuador amazonico desde siempre y hasta siempre \n"
+"viva la patria."
let lorem2=`otra frace epicamente epica
ahora esta es otra frase ecpica
`;

console.log (lorem);
console.log (lorem2);

//destructuracion de elementos//

var person = {
    'name':'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age,)

let {name,age}=person
console.log( name,age)

//unir elementos//
let team1= ['oscar','julian','Ricardo']
let team2=['diego', 'juan', 'rigoberto'];

let educacion =['david',...team1,...team2];
console.log(educacion);


const a='b';
a='a';
console.log(a);


