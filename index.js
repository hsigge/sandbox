let firstName = "Sophie";
let lastName = "Sjöberg";

const fullName = `${firstName} ${lastName}`;

console.log(firstName + ` ` + lastName); 
//outputs ”Sophie Sjöberg”

console.log(fullName);

//Arrays
let strongWomen = ['Diana', 'Theresa', 'Madonna'];

console.log(strongWomen);
console.log(strongWomen.lenght); //gives no of items in array
console.log(strongWomen[1]); //gives us ”Theresa”

//Objects (arrays with many values i.e. like a hash)
let car = {
    brand: 'Volvo', //comma to separate
    wheels: 4,
    color: 'red'
}; //close with semicolon at the end

console.log(car.color);

//objects within objects
let macchina = {
    brand: 'fiat',
    wheels: 3,
    color: {
        color1: 'red',
        color2: 'black'
    },
};

console.log(macchina.color.color2);


