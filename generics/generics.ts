export {}

// let names: string[] = ['max', 'anna']

let names: Array<string> = ['max', 'anna'] // generic type, same as above

type DataStore<T> = {
    [key: string]: T
}

let store: DataStore<string | boolean> = {}

store.name = 'bunny'
store.isLearning = true
