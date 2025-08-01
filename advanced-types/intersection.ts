type FileData = {
    path: string,
    content: string
}

type DatabaseData = {
    connectUrl: string,
    credentials: string
}

type Status = {
    isOpen: boolean,
    errorMessage: string
}

type AccessedFileData = FileData & Status
type AccessedDatabaseData = DatabaseData & Status


//////////////////////////////////
// Interface

// interface FileData {
//     path: string,
//     content: string
// }

// interface DatabaseData {
//     connectUrl: string,
//     credentials: string
// }

// interface Status {
//     isOpen: boolean,
//     errorMessage: string
// }

// interface AccessedFileData extends FileData, Status {}
// interface AccessedDatabaseData extends DatabaseData, Status {}