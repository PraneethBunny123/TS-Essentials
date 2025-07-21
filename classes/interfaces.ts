export {}

interface Authentication {
    email: string;
    password: string

    login(): void
    logout(): void
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
}