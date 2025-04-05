/*
> TypeScript Interfaces
- Interfaces are a way to define the structure of an object. They define the properties and methods that an object must have, but they don't specify the implementation.
- Interfaces are useful when you want to define a contract for an object, such as a class or a function. They help ensure that objects adhere to a specific structure and can be used to create more flexible and reusable code.
- Interfaces can be used to define the structure of objects, but they don't provide any implementation details. They are used to define the shape of an object, but not its specific implementation.
*/

interface Address {
  city: string;
  state: string;
}
interface User {
  name: string;
  age: number;
  userId?: number; //optional
  status: {
    isActive: boolean;
    isOnline?: boolean;
    address?: Address; // nested interface
  };
}

let user: User = {
  name: "Aman",
  age: 20,
  userId: 1234,
  status: {
    isOnline: true,
    isActive: true,
    address: {
      city: "New York",
      state: "NY",
    },
  },
};

function isLegal(user: User): boolean {
  return user.age >= 18;
}
console.log(isLegal(user));

// class implementating an Interface
interface People {
  name: string;
  age: number;
}

class Manager implements People {
  name: string;
  age: number;
  number: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.number = "Aman";
  }
}

let manager = new Manager("Aman", 20);
console.log(manager.name);
console.log(manager.age);

/*
> NOTE 
 - Typecript interfaces deines contracts in your code and provide explicit names for type-checking. it may have optional properties or read-only properties. 
 - It can be also used as the function types, interfaces are typically used as class types that make a contract between unrelated classes. 
*/
