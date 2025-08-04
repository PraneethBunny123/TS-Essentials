export {}

// let names: string[] = ['max', 'anna']

let names: Array<string> = ['max', 'anna'] // generic type, same as above

type DataStore<T> = {
    [key: string]: T
}

let store: DataStore<string | boolean> = {}

store.name = 'bunny'
store.isLearning = true

////////////////

// function merge<T>(a: T, b: T) {
//     return [a, b]
// }

// const ids = merge<number>(1, 2) // merge(1, 2) also works

function merge<T, U>(a: T, b: U) {
    return [a, b]
}

const ids = merge<number, string>(1, "bunny") // merge(1, "bunny") also works