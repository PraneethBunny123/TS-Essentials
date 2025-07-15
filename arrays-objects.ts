export {}

///////// arrays

let hobbies = ['cook', 'dance']

// hobbies.push(10)

// let users: (string | number)[]
let users = Array<string | number>;

let results: number[] //[1,0]

results = [1,2,3]

// tuples
let res: [number, number]; //[1,0]

res = [1,2];
// res = [1,2,3]; cause 


//////////////// objects

let user: {
    name: string
    age: number | string
    hobbies: string[]
    role: {
        description: string
        id: number
    }
} = {
    name: 'Bunny',
    age: 24,
    hobbies: ['2', 'hello'],
    role: {
        description: 'cs',
        id: 7
    }
}

let val: {} = ''