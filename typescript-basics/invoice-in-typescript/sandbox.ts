//  *** LESSON 1

// let characters: (string | number)[] = [],
//   numbers: number[] = [],
//   ninja: {
//     name: string;
//     belt: string;
//     age: number;
//   };

// characters = ["mario", 5, "luigi", "yoshi"];
// numbers = [10, 20, 30, 40];
// ninja = {
//   name: "yoshi",
//   belt: "black",
//   age: 28,
// };

// characters.push("yellow", 3);
// numbers.push(41);

// const circ = (diameter: number) => {
//   return Math.round(diameter * Math.PI);
// };

// console.log(characters, numbers, circ(3));

//  *** END OF LESSON 1

//  *** LESSON 2

let greet: (a: string, b: string) => void;

let logDetails: (obj: { name: string; age: number }) => void;
type StringOrNum = string | number;
type person = { name: string; age: number };

greet = (name: string, greeting: string) => {
  console.log(`${name}, ${greeting}`);
};

const add = (a: number, b: number, c?: StringOrNum) => {
  console.log(a + b);
  console.log(c);
};

const minus = (a: number, b: number, c?: number | string) => {
  return a - b;
};

logDetails = (paul: person) => {
  console.log(`${paul.name} is ${paul.age} years old.`);
};

add(5, 10);
