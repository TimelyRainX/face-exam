var name = 'bili';
function Person(name){
    this.name = name;
    this.sayHi = function (){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name);
        })
    }
}
var male = {
    name: 'haha',
    sayHi:()=>{
        console.log(this.name);
    }
}
const person = new (Person.bind(male, 'xiaohong'))();
person.sayHi();