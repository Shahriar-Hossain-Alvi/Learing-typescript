

// type Person = { name: string; age: number; isProgrammer?: boolean }


// const person: Person = {
//     name: "brian",
//     age: 34
// }

// console.log(person);

// function printPerson(person: { name: string }) {
//     console.log(person);
// }
// printPerson({ name: "Alan", age:44 })

// const person2= {name: "ALive", age: 43}

// printPerson(person2);

// type Option = {
//     debugMode?: boolean
//     indentLevel?: number
// }

// function printNameAndAge(
//     name: string,
//     { debugMode = false, indentLevel }: Option = {}
// ) {
//     console.log(name, debugMode, indentLevel);
// }

// printNameAndAge("Alan", { indentLevel: 5 });

// function sum(...num: number[]) {
//     console.log(num);
//     return // code here
// }

// sum(1, 2, 4);
// sum(1, 2);

// function sumWithCallBack(a: number, b: number, cb: (sum: number) => void) {
//     cb(a + b);
// }

// sumWithCallBack(5, 3, (sum) => {
//     console.log(sum);
// })

// type PrintNameFunc = (name: string)=> void

// function f(name: string){
// return 2
// }



// type Todo = {
//     id: number | string
//     name: string
//     status: "complete" | "incomplete" | "draft"
// }

// type Person = {
//     name: string
//     age: number
// }

// const todo: Todo = { id: 5, name: "alan", status: "complete" }
// console.log(todo);


// type TodoPerson = Todo | Person


// keyof 
// type Person = {
//     name: string
//     age: number
//     isProgrammer?: boolean
// }


// function getValue(key: keyof Person, person: Person){
//     return person[key]
// }

// const age = getValue("age", {name: "Alan", age:23});
// console.log(age);

// type Person = {
//     name: string;
//     age: number;
//     country: string;
// };

// type PersonKeys = keyof Person;

// function getValue(key: PersonKeys, person: Person){
//     return person[key];
// }

// console.log(getValue("name", {name: "Ali", age: 44, country: "BD"}));


// type Car = {
//     brand: string
//     model: string
//     year: number
// }

// function logCarProperty(key: keyof Car, vehicle: Car) {
//     console.log(`${key}: ${vehicle[key]}`);
// }

// const car1 = { brand: "toyota", model: "Premio", year: 2012 }
// const car2 = { brand: "Nissan", model: "GTR", year: 2006 }

// logCarProperty("brand", car1);
// logCarProperty("year", car2);
// logCarProperty("model", car1);




//typeof

// const person = { name: "Alan", age: 26, isProgrammer: true }
// const people: (typeof person)[] = [];

// people.push({ name: "brian", age: 54, isProgrammer: false })


// type Person = {
//     name: string
//     skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master"
// }

// const person: Person =  {name: "Kyle", skillLevel: "Expert"}

// function printSkillLevel(skillLevel: "Beginner" | "Intermediate" | "Expert"){
//     console.log(skillLevel);
// }
// printSkillLevel(person.skillLevel);




// function printSkillLevel2(skillLevel: Person["skillLevel"]){
//     console.log(skillLevel);
// }
// printSkillLevel2(person.skillLevel);


// type Person = {
//     name: string
//     skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master"
// }

// type PeopleGroupedBySkillLevel = {
//     [index in Person["skillLevel"]]: Person[]
// }

// const a: PeopleGroupedBySkillLevel = {
//     "Beginner": [{ name: "Kyle", skillLevel: "Beginner" }],
// }

// const nums = ['1', '2', '3'] as const
// const a = nums[0]

// console.log(a);


// tuples 
// const person = {
//     name: 'Kyle',
//     age: 22
// }

// Object.entries(person).forEach(([key, value])=>{
//     console.log(key, value);
// })

// type Tuple = [string, number, boolean];
// const a: Tuple = ["aaa", 56, true]
// console.log(a);



// Generics
// function getSecond<A>(array: A[]){
//     return array[1];
// }

// const a = [1,2,3];
// const b = ["as", "sad", "fgd"];

// const retA = getSecond(a);
// const retB = getSecond(b);

// console.log(retA);
// console.log(retB);


// set and map
// const a = new Set<string>()
// a.add("asd")
// console.log(a);

// const c = new Set(["default"]); // default value, don't need to define generics or types
// c.add("Changed")
// console.log(c);

// const b = new Map<string, number>();
// b.set("asd", 4);
// console.log(b);

// const d = new Map([["asda", 5]]); // default value, don't need to define generics or types
// d.set("asd", 4);
// console.log(d);

// function aToO<T>(array: [string, T][]) {
//     const obj: { [index: string]: T } = {}

//     array.forEach(([key, value]) => {
//         obj[key] = value;
//     });

//     return obj
// }

// const arr: [string, number | boolean][] = [
//     ["keyOne", 1],
//     ["keyTwo", 2],
//     ["keyThree", true]
// ]

// const objectFromArray = aToO(arr);
// console.log(objectFromArray);


// function wait(duration: number): Promise<string> {
//     return new Promise<string>(resolve => {
//         setTimeout(() => {
//             resolve("Hi");
//         }, duration)
//     })
// }

// wait(4000).then(value=>{
//     console.log(value.length);
//     console.log(value);
// })


// async function wait() {
//     return fetch("https://jsonplaceholder.typicode.com/todos/1")
// }

// wait().then(res => res.json()).then(data => console.log(data))


// type Todo = {
//     id: string
//     name: string
//     status: string
//     completed: boolean
// }

//type NewTodo1 = Pick<Todo, "name" | "status" | "completed"> // this takes/picks the name, status, completed property of the Todo type but does not take the id

//type NewTodo2 = Omit<Todo, "id"> // this also takes the name, status, completed property from the Todo type and Omits/ does not take the id property

// function saveTodo1(todo: NewTodo1): Todo{
//     return { ...todo, id: crypto.randomUUID()}
// }

// function saveTodo2(todo: NewTodo2): Todo{
//     return { ...todo, id: crypto.randomUUID()}
// }

// const usersTodo1 = saveTodo1({name: "Alan", status: "done", completed: true});
// console.log(usersTodo1);

// const usersTodo2 = saveTodo2({name: "Ali", status: "incomplete", completed: false});
// console.log(usersTodo2);

// function renderTodo(todo: Todo){
//     const div = document.createElement("div");
//     div.id = todo.id;

//     div.innerHTML = `
//         <h2>${todo.id}</h2>
//         <h3>${todo.name}</h3>
//         <p>${todo.status}</p>
//         <p>${todo.completed}</p>
//     `

//     document.body.appendChild(div)
// }

// renderTodo(usersTodo1);
// renderTodo(usersTodo2);


// type Todo = {
//     title: string
//     completed: boolean
//     address: {
//         street: string
//     }
// }

// type FormTodo = Partial<Todo>

// type Todo1 = {
//     title?: string
//     completed?: boolean
//     address?: {
//         street?: string
//     }
// }


// type FormTodo1 = Required<Todo1>



// type Todo = {
//     title?: string
//     completed?: boolean
//     address?: {
//         street?: string
//     }
// }


// type FormTodo = Required<Pick<Todo,"title" | "address">>


// function checkLength(a: string, b: number) {
//     return a.length < b;
// }

// type ReturnOfLengthCheck = ReturnType<typeof checkLength>

// type Func = () => void

// type ReturnOfLengthCheck1 = ReturnType<Func>


// type Params = Parameters<typeof checkLength>

// function checkParams(...a: Params) {
//     console.log(`${a[0]} and ${a[1]}`);
// }

// checkParams("Hello", 5);

// function checkParams2(a: Params[0], b:Params[1]) {
//     console.log(`${a} and ${b}`);
// }

// checkParams2("world", 5);


// type Person = {
//     name: string
//     age: number
// }

// type PeopleGroupedByName = {
//     [index: string]: Person[]
// }


// type PeopleGroupedByName = Record<string, Person[]>


// async function fetchSomething(){
//     return 4
// }

// type Value = Awaited<ReturnType<typeof fetchSomething>>

// type Todo = {
//     title: string
//     priority: "High" | "Normal" | "Low"
//     isComplete: boolean
//     description?: string
//     dueDate: string | Date
// }

// function extendTodo(todo: Todo) {
//     console.log(todo.dueDate); // dueDate is string | Date
// }

// function extendTodo1(todo: Todo) {
//     if (typeof todo.dueDate === "string") {
//         console.log(todo.dueDate); // dueDate is string
//     } else {
//         console.log(todo.dueDate.getDate()); // dueDate is Date
//     }
// }


// function extendTodo2(todo: Todo) {
//     if (todo.dueDate instanceof Date) {
//         console.log(todo.dueDate); // dueDate is date
//     } else {
//         console.log(todo.dueDate); // dueDate is string
//     }
// }

// function extendTodo3(todo: Todo) {
//     if (todo.dueDate instanceof Date) {
//         //does something 
//         return
//     } else {
//         console.log(todo.dueDate); // dueDate is string
//     }
// }


// function extendTodo4(todo: Todo) {
//     switch (todo.priority) {
//         case "High":
//             console.log(todo.priority);
//             break
//         case "Normal":
//             console.log(todo.priority);
//             break
//         case "Low":
//             console.log(todo.priority);
//             break
//         default:
//             console.log(todo.priority);
//     }
// }

// type Todo = {
//     title: string
// }


// fetch("asd")
//     .then(res => res.json())
//     .then(data => {
//         return data as Todo
//     }).then(todo => {

//     })


// const a: any = 2;
// (a as string).length


// type Todo = {
//     title: string
//     dueDate: string | Date
//     isComplete: boolean
// }


// const todo: Todo = {
//     title: "asd",
//     dueDate: new Date(),
//     isComplete: true
// }

//todo.dueDate.setDate(4) // this line gives error even if the due Date is set to new date in the todo object. Thats because due Date() can also be a string and string does not have setDate() function. 


// const todo1 = {
//     title: "adas",
//     dueDate: new Date(),
//     isComplete: false
// } satisfies Todo

//todo1.dueDate.setDate(4) // this does not gives error because using "satisfies Todo" the todo1 object satisfies the types of Todo


// type SuccessResponse = {
//     status: "Success"
//     data: { id: string; name: string; }
// }

// type ErrorResponse = {
//     status: "Error"
//     errorMessage: string
// }

// type UserApiResponse = {
//     status: "Success" | "Error"
//     data?: { id: string; name: string; }
//     errorMessage?: string
// }

// function handleResponse(res: UserApiResponse) {
//     if (res.status === "Success")
//         console.log(res.data.name);
//     else
//         console.log(res.errorMessage.length);
// }


// type UserApiResponse1 = SuccessResponse | ErrorResponse

// function handleResponse1(res: UserApiResponse1) {
//     if (res.status === "Success")
//         console.log(res.data.name);
//     else
//         console.log(res.errorMessage.length);
// }