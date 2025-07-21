// class User {
//     name: string;
//     age: number

//     constructor(n: string, a:number) {
//         this.name = n;
//         this.age = a;
//     }
// }

class User{
    constructor(public name: string, public age: number) {}
}

const max = new User('max', 38)