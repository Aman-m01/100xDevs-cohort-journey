// pick and partial
interface User {
  id: number;
  name: string;
  email: string;
  password: number;
  age: number;
}

type updateProps = Pick<User, "name" | "age" | "email">; // here we need to pass the all teh values

type updatePropsoptional = Partial<updateProps>; // it makes all of them optional

function updateUser(updateProps: updatePropsoptional) {
  // do something
}

updateUser({
  name: "asfd",
  age: 34,
});

// readonly
// type UserData = {
//     readonly name : string
//     readonly age : number
// }
// const data : UserData = {
//     name : 'AK',
//     age : 34
// }
type UserData = {
  name: string;
  age: number;
};
const data: Readonly<UserData> = {
  name: "AK",
  age: 34,
};

// data.age = 34  // cannot assign to age because it is a read only property

// ______________________________________________________________________________
// instead of this we use records
/*
type Users = {
  id: string;
  userName: string;
};

type DbData = {
  [key: string]: Users;
};

const newUser: DbData = {
  "asd@23": {
    id: "asd@23",
    userName: "AK",
  },
  "new12@": {
    id: "new12@",
    userName: "AK",
  },
};

*/

// record and map
type NewUsers = Record<string, { id: number; name: string }>;
const users: NewUsers = {
  "asdf@": { id: 234, name: "Aman" },
  "asfas@": { id: 234, name: "RJ" },
};

// map
type NewUserData = {
  name: string;
  age: number;
  location?: string;
};
const newUserData = new Map<string, NewUserData>();

newUserData.set("asdaw@", { name: "Aman", age: 13 });
newUserData.set("asdsdaw@", { name: "sdbf", age: 3 });

// execlude > in a function that can accept several types of input but you want to excludes specific types from passed to it.
type Events = "click" | "scroll" | "mousemove";
type excludeEvents = Exclude<Events, "scroll">;

const handleEvents = (event: excludeEvents) => {
  console.log(`Handling event: ${event}`);
};

handleEvents("click");
// handleEvents("scroll"); // Argument of type '"scroll"' is not assignable to parameter of type 'excludeEvents'
