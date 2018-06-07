var square = a => a*a;

console.log(square(9));

var user = {
  name: 'Zona', 
  sayHi: () => {
    console.log(`Hi. I am ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I am ${this.name}`);
  }
}

user.sayHiAlt(55, 56);