type DataStore = {
    [key: string]: number | boolean
}

let store: DataStore = {}

store.id = 3
store.isOpen = true

console.log(typeof(store.id))

// as const is a typescript feature makes the roles as readOnly by narrowing the type

let roles = ['admin', 'user', 'editor'] as const
