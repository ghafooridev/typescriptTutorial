// PARTIAL
interface Person1 {
  name: string;
  age: number;
}
const person1: Partial<Person1> = { name: "ali" };

// REQUIRED
interface Person2 {
  name?: string;
  age?: number;
}
const person2: Required<Person2> = { name: "ali" }; //ERROR

// READONLY
interface Person3 {
  name: string;
  age: number;
}
let person3: Readonly<Person3> = { name: "ali", age: 20 };
person3.name = "reza"; //ERROR

//RECORD
const personSkill1: Record<string, number> = {
  shoot: 92,
  power: 89,
  speed: 74,
};

//PICK
interface Person4 {
  name: string;
  age: number;
}
const person4: Pick<Person4, "age"> = { age: 20 }; // only pick the age from Person4 interface

//OMIT
interface Person5 {
  name: string;
  age: number;
}
const person5: Omit<Person4, "age"> = { name: "john" }; // opposite the `Pick` type

//EXCLUDE
type passwordType = string | string[] | undefined;
type validPasswordType = Exclude<passwordType, undefined>; // just string | string[]

//NON NULLABLE
type username = string | number | undefined | null;
type validUsername = NonNullable<username>; // just string | number

//RETURN TYPE
function helloWorld() {
  return "helloWorld";
}
type helloWorldType = ReturnType<typeof helloWorld>; // string
