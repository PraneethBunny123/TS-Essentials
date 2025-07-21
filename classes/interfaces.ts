export {}

interface Authentication {
    email: string;
    password: string

    login(): void
    logout(): void
}

interface Authentication {
    role: string;
}

let user: Authentication; // create a object for that interface

user = {
    email: 'test@gmail.com',
    password: 'test',
    login() {
        //Actual implementation
    },
    logout() {
        // actual implementation
    },
    role: 'React developer'
}

/////////////
// implementing the interface with class

class Auth implements Authentication {
    constructor(public email: string, public password: string, public role: string) {}

    login() {}
    logout() {}

}