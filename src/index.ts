console.log('Hello, world! ❌❌❌');
console.log('Hello, world! ✅✅✅');

let variable: any = true;
variable = "false";
Math.round(variable)

console.log('Variable:', variable);

//Arrays

const names: string[]=[];
names.push('Amayuru');
console.log('✳️ Names:', names);


//Objects
const person: {name: string, age: number} = {
    name: 'Amayuru',
    age: 25
};
console.log('😊 Person:', person);

//Enums
enum CardinalDirections {
    North,
    East,
    South,
    West
}
const cardinalDirection: CardinalDirections = CardinalDirections.East;
console.log('🟩🟩 Cardinal Direction:', cardinalDirection);


//Interfaces
interface Person {
    name: string;
    age: number;
}

const newPerson : Person = {
    name: 'Amayuru',
    age: 25
};

console.log('😜😜 New Person:', newPerson);

//Functions
function getTime(): number {
    const date= Date.now();

    return date;
}
console.log('⌚ Time:', getTime());
