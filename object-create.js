// 1. using object literal
const student = { name: 'sakib al hasan', job: 'cricket' };
//console.log(student);
// constructor
const person = new Object();
//console.log(person);

//3
const human = Object.create(student);
console.log(human.job);

//4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('Ridwan', 18);
// console.log(peop);

// 5 function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Ridwan');
console.log(man);