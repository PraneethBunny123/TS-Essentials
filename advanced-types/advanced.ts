type DataStore = {
    [key: string]: number | boolean
}

let store: DataStore = {}

store.id = 3
store.isOpen = true

console.log(typeof(store.id))