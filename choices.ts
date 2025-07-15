// enum Role {
//     Admin,
//     editor,
//     Guest
// }

enum Role {
    Admin = 1,
    editor,
    Guest
}

// let userRole: Role = 0; //onlt 0, 1, 2

let userRole: Role = Role.Admin

userRole = Role.Guest

//////////////////////////////
// //literal type

let newRole: 'admin' | 'editor' | 'guest' = 'admin'

newRole = 'guest'

let results: [1 | -1, 1 | -1]; //[1, -1]

results = [-1, -1]

////////////////////
//custom type

type customType = 'admin' | 'editor' | 'guest' | 'reader';

const customRole: customType = 'reader';