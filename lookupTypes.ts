interface User {
  id: number;
  name: string;
  address: {
    street?: string;
    city?: string;
    country?: string;
  };
}

type City = User["address"]["city"];
type IdOrName = User["id" | "name"];

function checkAddress(id: User["id"], address: User["address"]) {}

type UserProperties = keyof User;

let userProperty: UserProperties = "address";

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: User = { id: 123, name: "ali", address: { country: "Iran" } };

const myName = getProperty(user, "name");
