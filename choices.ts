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