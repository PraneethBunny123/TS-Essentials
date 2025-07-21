export {}

// class User {
//     constructor(private firstName: string, private lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const bunny = new User('bunny', 'bunny') 
// console.log(bunny.fullName)


class User{
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName(name: string) {
        this._firstName = name
    }

    set lastName(name: string) {
        this._lastName = name
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName
    }
}

const max = new User()

max.firstName = 'maxdsadads';
max.lastName = 'schafdsgag'

console.log(max.fullName)