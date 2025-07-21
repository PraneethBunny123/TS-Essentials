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
    protected _firstName: string = '';
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

    static eid = 'user'

    static greet() {
        console.log('Hello')
    }
}


const max = new User()

max.firstName = 'maxdsadads';
max.lastName = 'schafdsgag'

console.log(max.fullName)

console.log(User.eid)
User.greet()

class Employee extends User {
    constructor(public jobTitle: string) {
        super();
        super.firstName = 'Praneeth'
    }

    work() {
        console.log(this._firstName)
        // console.log(this._lastName)
    }
}

///////////////////////////

// abstract

abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {

    }
}

// const uiElement = new UIElement() // cannot create instance for abstarct class

class sideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}