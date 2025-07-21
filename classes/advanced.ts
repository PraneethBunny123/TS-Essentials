export {}

class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const bunny = new User('bunny', 'bunny') 
console.log(bunny.fullName)